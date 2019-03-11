import React from "react"

import Capa from "./components/Capa"
import Form from "./components/Form"
import Apresentacao from "./components/Apresentacao"
import axios from "axios"

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
    getDadosApi: [],
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

    });
    const cidade = e.target.elements.cidade.value;

    if (cidade.trim()) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)
        .then((res) => {
          this.setState({
            cidade: res.data.city.name,
            pais: res.data.city.country,
            getDadosApi:res.data.list
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

    console.log(this.state.getDadosApi)
  }

  render() {
    const {
      cidade,
      pais,
      getDadosApi,
      error,
    } = this.state
    const data = getDadosApi.map(item => {
      return item.dt_txt
    })
    return (
      <div>
        <div className="wrapper">
          <div >
            <div>
              <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="col-xs-5 title-container">
                  <Capa />
                </div>
                <div className="col-xs-7 form-container">
                  <Form
                    handleBuscarDados={this.handleBuscarDados}
                  />
                  <Apresentacao
                    cidade={cidade}
                    pais={pais}
                    data={data}
                    error={error}
                  />
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