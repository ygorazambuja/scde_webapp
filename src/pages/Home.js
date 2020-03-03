import React, { Fragment } from 'react';
import { Container, Column, Divider, Notification, Title } from 'rbx';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Fragment>
      <Container fluid>
        <Column.Group>
          <Column>
            <Link to="/pesquisa">
              <Notification color="info" style={{ ...buttonStyle }}>
                <Title align="center">Alunos Antigos</Title>
              </Notification>
            </Link>
          </Column>
          <Divider vertical>Ou</Divider>
          <Column>
            <Link to="/escrituracao">
              <Notification
                color="primary"
                style={{
                  ...buttonStyle
                }}
              >
                <Title align="center">Escrituração</Title>
              </Notification>
            </Link>
          </Column>
          <Divider vertical>Ou</Divider>
          <Column>
            <Link to="/">
              <Notification color="dark" style={{ ...buttonStyle }}>
                <Title align="center"> Geração de Documentos</Title>
              </Notification>
            </Link>
          </Column>
        </Column.Group>
      </Container>
    </Fragment>
  );
}

const buttonStyle = {
  height: '100px',
  marginTop: '10px',
  marginLeft: '20px',
  marginRight: '20px',
  marginBottom: '10px'
};
