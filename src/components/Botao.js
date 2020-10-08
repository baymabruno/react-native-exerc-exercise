import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  const executar = () => {
    console.warn('Exec1');
  };

  return (
    <>
      <Button title="Executar" onPress={executar} />
      <Button
        title="Executar"
        onPress={function () {
          console.warn('Exec2');
        }}
      />
      <Button title="Executar" onPress={() => console.warn('Exec3')} />
    </>
  );
};
