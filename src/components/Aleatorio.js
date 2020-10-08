import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default ({ min, max }) => {
  return (
    <Text style={estilo.txtG}>
      O valor aleatório é {Math.floor(Math.random() * (max - min)) + min}
    </Text>
  );
};
