import React, { Fragment } from 'react';
import { Column, Box } from 'rbx';
import { Link } from 'react-router-dom';

export default function Escrituracao() {
  return (
    <Fragment>
      <Column.Group>
        <Column>
          <Link to="/escrituracao/cadastrarNovo">
            <Box>Cadastrar</Box>
          </Link>
        </Column>
        <Column>
          <Link to="/escrituracao/pendentes">
            <Box>Pendentes</Box>
          </Link>
        </Column>
      </Column.Group>
    </Fragment>
  );
}
