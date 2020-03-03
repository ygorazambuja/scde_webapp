import React, { useState, useEffect, Fragment } from 'react';
import { Container, Input, Title, Box, List } from 'rbx';
import firebaseService from '../services/firebaseService';
import Aluno from '../components/Aluno';

export default function Pesquisa() {
  const [alunos, setAlunos] = useState([]);
  const [inputField, setInputField] = useState('');
  const [alunosFiltrados, setAlunosFiltrados] = useState([]);

  useEffect(() => {
    const alunos = localStorage.getItem('@alunos');
    if (!alunos) {
      firebaseService.getData('alunos', dataReceived => {
        localStorage.setItem('@alunos', JSON.stringify(dataReceived));
        setAlunos(...dataReceived);
      });
    } else {
      setAlunos(JSON.parse(localStorage.getItem('@alunos')));
    }
  }, []);

  useEffect(() => {
    const dadosFiltrados = alunos.filter(aluno => {
      const regex = new RegExp(inputField, 'gi');
      return regex.test(aluno.nome);
    });

    setAlunosFiltrados(dadosFiltrados);
  }, [alunos, inputField]);

  return (
    <Fragment>
      <Container>
        <Box>
          <Title size={5} subtitle>
            Digite mais do que 3 letras para aparecer os Resultados
          </Title>
          <Input
            type="text"
            placeholder="Pesquise Aqui"
            value={inputField}
            onChange={e => setInputField(e.target.value)}
          />

          {inputField.length >= 4 && (
            <Box>
              <List>
                {alunosFiltrados.map(aluno => (
                  <List.Item key={aluno._id}>
                    <Aluno {...aluno}></Aluno>
                  </List.Item>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Container>
    </Fragment>
  );
}
