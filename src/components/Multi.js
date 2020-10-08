import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default function Comp() {
  return <Text style={estilo.txtG}>Comp #</Text>;
}

function Comp1() {
  return <Text style={estilo.txtG}>Comp #1</Text>;
}

function Comp2() {
  return <Text style={estilo.txtG}>Comp #3</Text>;
}

export { Comp1, Comp2 };
