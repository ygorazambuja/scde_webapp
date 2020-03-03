import React from 'react';
import { Card } from 'rbx';
import PropTypes from 'prop-types';

export default function Aluno(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>{props.nome}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <span>{props.serie}</span>
        <span>{props.ano}</span>
      </Card.Content>
    </Card>
  );
}

Aluno.propTypes = {
  nome: PropTypes.string.isRequired,
  serie: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired
};
