import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "3352c2738fdf23a0cd968b8f63c5e4a1";

class App extends React.Component {
  state = {
    cidade: '',
    pais: '',
    populacao: '',
    latitude: '',
    longitude: '',
    error: ''
  }
  getDados = async (e) => {
    e.preventDefault();
    const cidade = e.target.elements.cidade.value;
    
    if (cidade) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`)
      const dados = await api_call.json();
      
      this.setState({
        cidade: dados.city.name,
        pais: dados.city.country,
        populacao: dados.city.population,
        latitude: dados.city.coord.lat,
        longitude: dados.city.coord.lon,
        error: ''
      });
    } else {
      this.setState({
        error: "Informe a Cidade para consulta!"
      });  
    }
    console.log(this.state.data);
  }

  handleFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
                  <Form getDados={this.getDados} />
                  <Weather
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