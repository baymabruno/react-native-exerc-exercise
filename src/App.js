import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Contador from './components/Contador';

export default () => (
  <SafeAreaView style={style.App}>
    <Contador inicial={100} passo={13} />
    <Contador />
    {/*
    <Botao />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de cadastro do produto"
    />    
    <Aleatorio min={3} max={20} />
    <MinMax min={3} max={20} />
    <X />
    <Comp1 />
    <Comp2 />
    <Primeiro /> 
    */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
