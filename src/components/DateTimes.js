import React from 'react'
import moment from 'moment';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

export default props =>
    props.cidadeApi && props.pais ?
        <div>
            <strong>Data e Hora</strong>
            <ListGroup>
                {props.dateTimes.map((dateTime) => {
                    return (
                        <ListGroupItem
                            key={dateTime}
                            onClick={
                                () => props.handleOnChangeSolicitacao(dateTime)
                            }
                            active={props.dataSelecionada === dateTime}
                        >
                            {moment(dateTime).format("DD/MM/YYYY - HH:mm")}
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        </div>
        : null
