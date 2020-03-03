import React, { Fragment, useState } from 'react';
import { Container, Field, Label, Control, Input, Column, Button } from 'rbx';
import render from './pdfs/CancelamentoPdf';

export default function CancelamentoMatricula() {
  const [campos, setCampos] = useState({
    nomeDoResponsavel: '',
    rg: '',
    orgaoExpedidor: '',
    cpf: '',
    motivos: '',
    dia: new Date().getDate(),
    mes: new Date().getMonth(),
    ano: new Date().getFullYear(),
    nomeDoAluno: ''
  });

  return (
    <Fragment>
      <Container fluid style={{ padding: '20px' }}>
        <Field>
          <Label>Nome: </Label>
          <Control>
            <Input
              type="text"
              placeholder="Digite Aqui!"
              value={campos.nomeDoAluno}
              onChange={e =>
                setCampos({ ...campos, nomeDoAluno: e.target.value })
              }
            />
          </Control>
        </Field>
        <Field>
          <Label>Nome do Responsavel: </Label>
          <Control>
            <Input
              type="text"
              placeholder="Digite Aqui!"
              value={campos.nomeDoResponsavel}
              onChange={e =>
                setCampos({ ...campos, nomeDoResponsavel: e.target.value })
              }
            />
          </Control>
        </Field>
        <Column.Group>
          <Column>
            <Field>
              <Label>RG: </Label>
              <Control>
                <Input
                  type="text"
                  placeholder="Digite Aqui!"
                  value={campos.rg}
                  onChange={e => setCampos({ ...campos, rg: e.target.value })}
                />
              </Control>
            </Field>
          </Column>
          <Column>
            <Field>
              <Label>Orgão Expedidor: </Label>
              <Control>
                <Input
                  type="text"
                  placeholder="Digite Aqui!"
                  value={campos.orgaoExpedidor}
                  onChange={e =>
                    setCampos({ ...campos, orgaoExpedidor: e.target.value })
                  }
                />
              </Control>
            </Field>
          </Column>
        </Column.Group>

        <Field>
          <Label>CPF: </Label>
          <Control>
            <Input
              type="text"
              placeholder="Digite Aqui!"
              value={campos.cpf}
              onChange={e => setCampos({ ...campos, cpf: e.target.value })}
            />
          </Control>
        </Field>

        <Button
          fullwidth
          color="info"
          onClick={() => {
            render({ ...campos });
          }}
        >
          Gerar!
        </Button>
      </Container>
    </Fragment>
  );
}
