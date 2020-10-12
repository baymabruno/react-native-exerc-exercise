import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
  };

  alterarQtdNumero = (qtd) => {
    this.setState({ qtdNumeros: qtd });
  };

  render() {
    return (
      <>
        <Text style={estilo.txtG}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd de números"
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumero}
        />
      </>
    );
  }
}
