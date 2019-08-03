import React from 'react'
import moment from 'moment';
import {
    ListGroup,
    ListGroupItem
  } from 'react-bootstrap';

export default props =>
    props.cidade && props.pais ?
      <div>
        <strong>Data e Hora</strong>
        <ListGroup>
          {props.data.map((item) => {
            return (
              <ListGroupItem
                key={item}
                onClick={
                  () => props.handleOnChangeSolicitacao(item)
                }
                active={props.dateTime === item}
              >
                {moment(item).format("DD/MM/YYYY - HH:mm")}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
      : null
  