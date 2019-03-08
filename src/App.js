import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Apresentacao from "./components/Apresentacao";

const API_KEY = "3352c2738fdf23a0cd968b8f63c5e4a1";

class App extends React.Component {
  state = {
    cidade: '',
    pais: '',
    populacao: '',
    error: '',
    data: '',
    humidade: '',
    temperatura: '',
    clima: '',
    getDadosApi: []
  }

  handleBuscarDados = async (e) => {
    e.preventDefault();

    const cidade = e.target.elements.cidade.value;

    if (cidade.trim()) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)

      // axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)
      //   .then(res => {
      //     const dados = res.data
      //     this.setState({ getDadosApi: dados });
      //   })

      if (api_call.status === 404) {
        alert('Cidade não encontrada ou inválida!!!')
      } else {
        const getDadosApi = await api_call.json()
      
        this.setState({
          cidade: getDadosApi.city.name,
          pais: getDadosApi.city.country,
          data: getDadosApi.list[0].dt_txt,
          temperatura: getDadosApi.list[0].main.temp,
          humidade: getDadosApi.list[0].main.humidity,
          clima: getDadosApi.list[0].weather[0].description,
          error: ''
        });
      }
    } else {
      this.setState({
        cidade: '',
        pais: '',
        populacao: '',
        data: '',
        humidade: '',
        temperatura: '',
        clima: '',
        error: "Informe a Cidade para consulta!"
      });
    }
  }

  render() {
    const {
      cidade,
      pais,
      error,
      data,
      temperatura,
      humidade,
      clima
    } = this.state

    return (
      <div>
        <div className="wrapper">
          <div >
            <div>
              <div className="row" style={{display: 'flex', flexDirection: 'row'}}>
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form
                    handleBuscarDados={this.handleBuscarDados}
                  />
                  <Apresentacao
                    cidade={cidade}
                    pais={pais}
                    data={data}
                    temperatura={temperatura}
                    humidade={humidade}
                    clima={clima}
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