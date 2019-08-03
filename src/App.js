import React, { Component } from 'react'
import axios from 'axios'

import Forecast from './components/Forecast'
import Form from './components/Form'
import Localizacao from './components/Localizacao'
import DateTimes from './components/DateTimes'

class App extends Component {
  state = {
    cidade:'',
    cidadeApi: '',
    pais: '',
    error: '',
    json: [],
  }

  handleBuscarDados = () => {
    if (this.state.cidade.trim()) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cidade}&appid=3352c2738fdf23a0cd968b8f63c5e4a1&units=metric&lang=pt`)
        .then((res) => {
          this.setState({
            cidadeApi: res.data.city.name,
            pais: res.data.city.country,
            json: res.data.list,
            error: '',
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
        cidadeApi: '',
        pais: '',
        error: "Informe uma cidade para consulta!"
      });
    }
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if(e.target.value.length === 0){
      this.setState({
        cidadeApi: '', 
        pais: '',
      dataSelecionada:''})
    }
  }

  handleOnChangeSolicitacao = (dataSelecionada) => {
    this.setState({
      dataSelecionada
    }, () => {
      const forecast = this.state.json.filter(item => item.dt_txt === dataSelecionada).map(i => ({
        tempMax: i.main.temp_max,
        temMin: i.main.temp_min,
        humidade: i.main.humidity,
        temp: i.main.temp,
        speedWind: i.wind.speed
      }))

      this.setState({
        tempMax: forecast[0].tempMax,
        temMin: forecast[0].temMin,
        humidade: forecast[0].humidade,
        temp: forecast[0].temp,
        speedWind: forecast[0].speedWind
      });
    })
  }

  render() {
    const {
      cidadeApi,
      cidade,
      pais,
      json,
      error,
      dataSelecionada,
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
              cidadeApi={cidadeApi}
              pais={pais}
            />

            <DateTimes
              cidadeApi={cidadeApi}
              pais={pais}
              data={data}
              handleOnChangeSolicitacao={this.handleOnChangeSolicitacao}
              dataSelecionada={dataSelecionada}
            />
          </div>

          <Forecast
            dataSelecionada={dataSelecionada}
            cidadeApi={cidadeApi}
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