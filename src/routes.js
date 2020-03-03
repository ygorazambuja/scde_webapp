import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pesquisa from './pages/Pesquisa';
import Escrituracao from './pages/Escrituracao';
import CadastrarPendente from './pages/CadastrarPendente';
import ListarPendentes from './pages/ListarPendentes';
import GeradorHome from './pages/GeradorHome';
import CancelamentoMatricula from './pages/Geradores/CancelamentoMatricula';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pesquisa" exact component={Pesquisa} />
      <Route path="/escrituracao" exact component={Escrituracao} />
      <Route
        path="/escrituracao/cadastrarNovo"
        exact
        component={CadastrarPendente}
      />
      <Route path="/escrituracao/pendentes" exact component={ListarPendentes} />
      <Route path="/gerador" exact component={GeradorHome} />
      <Route
        path="/gerador/cancelamentoMatricula"
        exact
        component={CancelamentoMatricula}
      />
    </Switch>
  </BrowserRouter>
);

export default routes;
