import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import Routes from './routes';

export default function App() {
  return (
    <Fragment>
      <TopBar />
      <Routes />
    </Fragment>
  );
}
