import React, { Component } from 'react'
import './App.css'
import { Table } from 'reactstrap'

class Dados extends Component {
  render() {
    return (
      <div className="container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Country</th>
            <th>Data/Hora</th>
            <th>Temp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Salvador</td>
            <td>BR</td>
            <td>2019-03-07 15:00:00</td>
            <td>304.254</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default Dados;
