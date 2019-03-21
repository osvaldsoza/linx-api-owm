import React from "react"

import Capa from "./components/Capa"
import Form from "./components/Form"
import Apresentacao from "./components/Apresentacao"
import axios from "axios"
import {
  ListGroup,
  ListGroupItem

} from 'react-bootstrap';
import moment from 'moment';

const API_KEY = "3352c2738fdf23a0cd968b8f63c5e4a1"

class App extends React.Component {
  state = {
    cidade: '',
    pais: '',
    populacao: '',
    error: '',
    data: [],
    humidade: '',
    temperatura: '',
    clima: '',
    getDadosDatas: [],
    api_call: []
  }

  handleBuscarDados = (e) => {
    e.preventDefault();
    this.setState({
      cidade: '',
      pais: '',
      data: '',
      humidade: '',
      temperatura: '',
      clima: '',
      error: '',
      dateTime: '',
      dadosDataSelecionada: {}

    });
    const cidade = e.target.elements.cidade.value;

    if (cidade.trim()) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)
        .then((res) => {
          this.setState({
            cidade: res.data.city.name,
            pais: res.data.city.country,
            getDadosDatas: res.data.list
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

    console.log(this.state.getDadosDatas)
  }

  handleOnChangeSolicitacao = (dateTime) => {
    this.setState({
      dateTime
    }, () => {
       const dadosData = this.state.getDadosDatas.filter(item => item.dt_txt === dateTime).map(i => ({
        tempMax: i.main.temp_max,
        temMin: i.main.temp_min,
        humidade: i.main.humidity,
        grndLevel: i.main.grnd_level,
        pressure: i.main.pressure,
        seaLevel: i.main.sea_level,
        temp: i.main.temp,
        tempKf: i.main.temp_kf,
        main: i.weather[0].main,
        description: i.weather[0].description,
        speedWind: i.wind.speed
      }))
      console.log(this.state.getDadosDatas)
      console.log(dadosData.humidade)
    })
  }
  render() {
    const {
      cidade,
      pais,
      getDadosDatas,
      error,
      dateTime
    } = this.state
    const data = getDadosDatas.map(item => {
      return item.dt_txt
    })
    return (
      <div>
        <div className="wrapper">
          <div>
            <div>
              <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col-xs-5 title-container">
                  <Capa />
                </div>
                <div className="col-xs-7 form-container">
                  <div className="titulo-h" style={{ marginBottom: '30px', display: 'flex' }}>
                    <h2 style={{ marginRight: '8px', color: '#f16051' }}>OpenWeatherMap</h2>
                    <h4 style={{ marginTop: '8px', color: '#fff' }}> 5 day weather forecast</h4>
                  </div>
                  <Form
                    handleBuscarDados={this.handleBuscarDados}
                  />
                  <Apresentacao
                    cidade={cidade}
                    pais={pais}
                    data={data}
                    error={error}
                  />
                  {
                    cidade ?
                      <div>
                        <p className="linx__info linx__key"> Data e Hora</p>
                        <ListGroup>
                          {data.map((item) => {
                            return (
                              <ListGroupItem
                                key={item}
                                onClick={
                                  () => this.handleOnChangeSolicitacao(item)
                                }
                                active={dateTime === item}
                              >
                                {moment(item).format("DD/MM/YYYY - HH:mm")}
                              </ListGroupItem>
                            );
                          })}
                        </ListGroup>
                      </div>
                      : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;