import React, { Fragment, useState, useEffect } from 'react';
import { Title, Divider, Container } from 'rbx';
import firebaseService from '../services/firebaseService';
import AlunoPendente from '../components/AlunoPendente';

export default function ListarPendentes() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    firebaseService.getData('documentos', dataReceived => {
      setAlunos(dataReceived);
    });
  }, []);
  return (
    <Fragment>
      <Title subtitle align="center" style={{ paddingTop: '20px' }}>
        Listando Alunos Pendentes{' '}
      </Title>
      <Divider></Divider>
      <Container>
        {alunos.map(aluno => (
          <AlunoPendente key="aluno.key" {...aluno} firebaseKey={aluno.key} />
        ))}
      </Container>
    </Fragment>
  );
}
