import React from 'react';
import { Platform, Text } from 'react-native';
import estilo from './estilo';

export default () => {
  if (Platform.OS === 'android') {
    return <Text style={estilo.txtG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={estilo.txtG}>iOS</Text>;
  } else {
    return <Text style={estilo.txtG}>{Platform.OS}</Text>;
  }
};
