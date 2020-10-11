import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';
import If from './If';

export default ({ usuario = {} }) => {
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.txtG}>Usuário logado:</Text>
        <Text style={estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
