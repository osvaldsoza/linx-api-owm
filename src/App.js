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
    latitude: '',
    longitude: '',
    error: '',
    dados: []
  }
  handleBuscarDados = async (e) => {
    e.preventDefault();
    const cidade = e.target.elements.cidade.value;

    if (cidade) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)
      this.setState({ dados: await api_call.json() });
      //const dados = await api_call.json();

      this.setState({
        cidade: this.state.dados.city.name,
        pais: this.state.dados.city.country,
        populacao: this.state.dados.city.population,
        latitude: this.state.dados.city.coord.lat,
        longitude: this.state.dados.city.coord.lon,
        error: ''
      });
    } else {
      this.setState({
        error: "Informe a Cidade para consulta!"
      });
    }

    console.log(this.state.dados);
  }

  render() {

    const { cidade, pais, populacao, error, latitude, longitude } = this.state

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
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
                    populacao={populacao}
                    latitude={latitude}
                    longitude={longitude}
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