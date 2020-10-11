import React from 'react';
import { FlatList, Text } from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default (props) => {
  const produtoRender = ({ item: p }) => {
    return (
      <Text>
        {p.id} - {p.nome} - R$ {p.preco}
      </Text>
    );
  };

  return (
    <>
      <Text style={estilo.txtG}>Lista Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
