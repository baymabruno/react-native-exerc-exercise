import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';

export default () => (
  <SafeAreaView style={style.App}>
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Familia>
    {/*
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    
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
