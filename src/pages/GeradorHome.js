import React, { Fragment } from 'react';
import { Column, Box, Notification, Button, Title } from 'rbx';
import { Link } from 'react-router-dom';

export default function GeradorHome() {
  return (
    <Fragment>
      <Column.Group>
        <Column>
          <Box
            style={{
              padding: '5%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Button
              fullwidth
              color="primary "
              style={{
                padding: '5%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <h1 style={{ fontSize: '20px' }}>Cancelamento de Matricula</h1>
            </Button>
          </Box>
        </Column>
        <Column>
          <Box>
            <Link to="/gerador/expedicaoDocumentos">
              <Button fullwidth color="info " style={{ padding: '5%' }}>
                Expedição de Documentos
              </Button>
            </Link>
          </Box>
        </Column>
      </Column.Group>
    </Fragment>
  );
}
