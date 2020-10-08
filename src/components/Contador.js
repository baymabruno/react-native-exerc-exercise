import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import estilo from './estilo';

export default ({ inicial = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(inicial);

  const inc = () => {
    setNumero(numero + passo);
    console.warn(numero);
  };

  const dec = () => {
    setNumero(numero - passo);
    console.warn(numero);
  };

  return (
    <>
      <Text style={estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
