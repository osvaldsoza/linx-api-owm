import React, { Component } from 'react'
import './App.css'
import { Button, Input, FormGroup, Form } from 'reactstrap'
import Dados from '../src/Dados'

const API_KEY = "3352c2738fdf23a0cd968b8f63c5e4a1"

class App extends Component {
  state = {
    cidade: ''
    // codigo: ''
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlePesquisar = async (e) => {
    e.preventDefault()
    const { cidade } = this.state
    //const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=Manchester&appid=${API_KEY}`)
    const api_call = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric`)
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    console.log(data)
  }

  render() {
    const { cidade } = this.state
    return (
      <div className="container">
        <h2>Previsão do Tempo</h2>
        <hr />
        <div className="form">
          <Form className="form-inline">
            <FormGroup>
              <Input
                style={{ width: "18vw" }}
                placeholder="Cidade -> Ex: Blumenau"
                name="cidade"
                value={cidade}
                onChange={this.handleFieldChange}
              />
              {/*
              <Input
                placeholder="Código -> Ex: BR"
                name="codigo"
                value={codigo}
                onChange={this.handleFieldChange}
              />
              */}
            </FormGroup>
            <Button color="secondary" onClick={this.handlePesquisar}>Pesquisar</Button>{' '}
          </Form>
          <hr />
        </div>
        <Dados />
      </div>
    );
  }
}

export default App;
