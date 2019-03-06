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
    //const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=London,uscallback=test&appid=${API_KEY}`,)
    const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const data = response.json()

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
                placeholder="Cidade"
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
