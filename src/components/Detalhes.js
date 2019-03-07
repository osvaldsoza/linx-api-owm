import React from "react";
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

class Detalhes extends React.Component {
    static propTypes = {
        cidade: PropTypes.string
    }

    static defaultProps = {
        cidade: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggle}>Detalhes</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.cidade}</ModalHeader>
                    <ModalBody>
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Data/Hora</th>
                                    <th>Clima</th>
                                    <th>Máxima</th>
                                    <th>Mínima</th>
                                    <th>Humidade</th>
                                    <th>Veloc. Vento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>2019-03-07 12:00:00</td>
                                    <td>Nublado</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>2019-03-07 12:00:00</td>
                                    <td>Nublado</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>2019-03-07 12:00:00</td>
                                    <td>Nublado</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                    <td>27.24</td>
                                    <td>28.93</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <button color="secondary" onClick={this.toggle}>Sair</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Detalhes;