
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import olimpiadasData from './olimpiada.json';

const contarMedalhas = (pais) => {
  const resultados = olimpiadasData.filter((item) => item.country === pais);
  let ouro = 0;
  let prata = 0;
  let bronze = 0;
  resultados.forEach((item) => {
    ouro += item.gold;
    prata += item.silver;
    bronze += item.bronze;
  });
  return { ouro, prata, bronze };
};

const App = () => {
  const [pais, setPais] = useState('');
  const [medalhas, setMedalhas] = useState(null);

  const handlePress = () => {
    const resultado = contarMedalhas(pais);
    setMedalhas(resultado);
  };

  return (
    <View style={styles.container}>
      <Text>Digite o nome de um país:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do país"
        onChangeText={setPais}
        value={pais}
      />
      <Button title="Buscar Medalhas" onPress={handlePress} />
      {medalhas && (
        <View style={styles.resultados}>
          <Text>Medalhas de Ouro: {medalhas.ouro}</Text>
          <Text>Medalhas de Prata: {medalhas.prata}</Text>
          <Text>Medalhas de Bronze: {medalhas.bronze}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  resultados: {
    marginTop: 20,
  },
});

export default App;

