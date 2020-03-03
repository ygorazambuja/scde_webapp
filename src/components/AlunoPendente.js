import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Checkbox, Label, Content, Column, Box } from 'rbx';
import firebaseService from '../services/firebaseService';

export default function AlunoPendente(props) {
  const [aluno, setAluno] = useState({
    carteiraVacina: props.carteiraVacina,
    certidaoNascimento: props.certidaoNascimento,
    cartaoSus: props.cartaoSus,
    transferencia: props.transferencia,
    declaracaoTransferencia: props.declaracaoTransferencia,
    loading: props.loading,
    aluno: props.aluno,
    key: props.firebaseKey,
    comprovanteEndereco: props.comprovanteEndereco
  });

  useEffect(() => {
    console.log(aluno);
  }, [aluno]);

  const updateField = () => {
    firebaseService.updateData(aluno.key, 'documentos', aluno);
  };

  return (
    <Card>
      <Card.Header backgroundColor="danger">
        <Card.Header.Title>{aluno.aluno}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Content>
          <Column.Group>
            <Column>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.certidaoNascimento}
                    value={aluno.certidaoNascimento}
                    onChange={e => {
                      setAluno({
                        ...aluno,
                        certidaoNascimento: e.target.value
                      });
                      updateField();
                    }}
                  />
                  Certidão de Nascimento
                </Label>
              </Box>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.carteiraVacina}
                    onChange={() => {
                      updateField();
                    }}
                  />
                  Carteira de Vacina
                </Label>
              </Box>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.transferencia}
                    onChange={() => {
                      updateField();
                    }}
                  />
                  Transferência
                </Label>
              </Box>
            </Column>
            <Column>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.comprovanteEndereco}
                    onChange={() => {
                      updateField();
                    }}
                  />
                  Comprovante de Endereço
                </Label>
              </Box>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.cartaoSus}
                    onChange={() => {
                      updateField();
                    }}
                  />
                  Cartão do Sus
                </Label>
              </Box>
              <Box>
                <Label>
                  <Checkbox
                    checked={aluno.declaracaoTransferencia}
                    onChange={() => {
                      updateField();
                    }}
                    value={aluno.declaracaoTransferencia}
                  />
                  Declaração de Transferencia
                </Label>
              </Box>
            </Column>
          </Column.Group>
        </Content>
      </Card.Content>
    </Card>
  );
}

AlunoPendente.propTypes = {
  aluno: PropTypes.string.isRequired,
  carteiraVacina: PropTypes.bool.isRequired,
  certidaoNascimento: PropTypes.bool.isRequired,
  comprovanteEndereco: PropTypes.bool.isRequired,
  declaracaoTransferencia: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  transferencia: PropTypes.bool.isRequired,
  cartaoSus: PropTypes.bool.isRequired
};
