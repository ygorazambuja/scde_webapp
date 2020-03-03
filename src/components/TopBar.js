import React from 'react';
import { Navbar, Title, Button } from 'rbx';

function TopBar() {
  return (
    <Navbar color="">
      <Navbar.Menu>
        <Navbar.Item dropdown hoverable>
          <Navbar.Link textColor="primary">Opções</Navbar.Link>
          <Navbar.Dropdown boxed>
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Item href="/pesquisa">Pesquisa</Navbar.Item>
            <Navbar.Item href="/escrituracao">Escrituração</Navbar.Item>
            <Navbar.Item href="/gerador">Gerador de Documentos</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
        <Navbar.Segment align="start">
          <Navbar.Item>
            <Button.Group>
              <Button color="primary">
                <strong>Entre</strong>
              </Button>
              <Button color="light">Registre-se</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
      <Navbar.Segment align="end">
        <Navbar.Brand>
          <Navbar.Item>
            <Title>EEFRS</Title>
          </Navbar.Item>
          <Navbar.Burger></Navbar.Burger>
        </Navbar.Brand>
      </Navbar.Segment>
    </Navbar>
  );
}

export default TopBar;
