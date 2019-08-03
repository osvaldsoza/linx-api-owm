import React, { Component } from 'react'
import axios from 'axios'

import Forecast from './components/Forecast'
import Form from './components/Form'
import Localizacao from './components/Localizacao'
import DateTimes from './components/DateTimes'

class App extends Component {
  state = {
    cidade: '',
    pais: '',
    error: '',
    json: [],
  }

  handleBuscarDados = () => {
    if (this.state.cidade.trim()) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cidade}&appid=3352c2738fdf23a0cd968b8f63c5e4a1&units=metric&lang=pt`)
        .then((res) => {
          console.log(res)
          this.setState({
            cidade: res.data.city.name,
            pais: res.data.city.country,
            json: res.data.list,
            error: ''
          });
        }).catch(e => {
          this.setState({
            cidade: '',
            pais: '',
            error: "Cidade inválida ou não existe!!!"
          });
        })
    } else {
      this.setState({
        cidade: '',
        pais: '',
        error: "Informe a Cidade para consulta!"
      });
    }
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnChangeSolicitacao = (dateTime) => {
    this.setState({
      dateTime
    }, () => {
      const dadosData = this.state.json.filter(item => item.dt_txt === dateTime).map(i => ({
        tempMax: i.main.temp_max,
        temMin: i.main.temp_min,
        humidade: i.main.humidity,
        temp: i.main.temp,
        speedWind: i.wind.speed
      }))
      console.log(dadosData)
      this.setState({
        tempMax: dadosData[0].tempMax,
        temMin: dadosData[0].temMin,
        humidade: dadosData[0].humidade,
        temp: dadosData[0].temp,
        speedWind: dadosData[0].speedWind
      });
    })
  }

  render() {
    const {
      cidade,
      pais,
      json,
      error,
      dateTime,
      tempMax,
      temMin,
      humidade,
      temp,
      speedWind
    } = this.state

    const data = json.map(item => {
      return item.dt_txt
    })

    return (
      <div className="container">
        <div className="jumbotron">
          <h3>Open Weather Map</h3>
          <p> 5 day weather forecast</p>
        </div>
        <div className="main-div">
          <div className="div-left">
            <Form
              handleBuscarDados={this.handleBuscarDados}
              handleFieldChange={this.handleFieldChange}
              error={error}
              cidade={cidade}
            />
            <div style={{ marginTop: '15px' }} />

            <Localizacao
              cidade={cidade}
              pais={pais}
            />

            <DateTimes
              cidade={cidade}
              pais={pais}
              data={data}
              handleOnChangeSolicitacao={this.handleOnChangeSolicitacao}
              dateTime={dateTime}
            />
          </div>

          <Forecast
            dateTime={dateTime}
            cidade={cidade}
            humidade={humidade}
            speedWind={speedWind}
            temp={temp}
            tempMax={tempMax}
            temMin={temMin}
          />
        </div>
      </div>
    );
  }
};

export default App;