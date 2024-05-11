/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [countryName, setCountryName] = useState('');
  const [medalDetails, setMedalDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchMedalDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/"); //http://172.30.112.1:3000/
      if (!response.ok) {
        throw new Error('Erro ao buscar os detalhes das medalhas: ' + response.status);
      }
      const data = await response.json();
      const countryMedals = data.filter(medal => medal.country === countryName);
      if (countryMedals.length > 0) {
        const goldCount = countryMedals.reduce((acc, medal) => acc + medal.gold, 0);
        const silverCount = countryMedals.reduce((acc, medal) => acc + medal.silver, 0);
        const bronzeCount = countryMedals.reduce((acc, medal) => acc + medal.bronze, 0);
        setMedalDetails({ gold: goldCount, silver: silverCount, bronze: bronzeCount });
        setError(null);
      } else {
        setMedalDetails(null);
        setError(`País "${countryName}" não encontrado ou sem medalhas`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe o nome do país:</Text>
      <TextInput
        style={styles.input}
        value={countryName}
        onChangeText={text => setCountryName(text)}
        placeholder="English, please!"
      />
      <Button title="Buscar Detalhes das Medalhas" onPress={fetchMedalDetails} />
      {error && <Text style={styles.error}>{error}</Text>}
      {medalDetails && (
        <View style={styles.medalDetails}>
          <Text style={styles.countryName}>{countryName}</Text>
          <Text>Ouro: {medalDetails.gold}</Text>
          <Text>Prata: {medalDetails.silver}</Text>
          <Text>Bronze: {medalDetails.bronze}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  medalDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [countryName, setCountryName] = useState('');
  const [medalDetails, setMedalDetails] = useState(null);
  const [error, setError] = useState(null);

  const fetchMedalDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/0`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar os detalhes das medalhas: ' + response.status);
      }
      const data = await response.json();
      const countryMedals = data.filter(medal => medal.country === countryName);
      if (countryMedals.length > 0) {
        const goldCount = countryMedals.reduce((acc, medal) => acc + medal.gold, 0);
        const silverCount = countryMedals.reduce((acc, medal) => acc + medal.silver, 0);
        const bronzeCount = countryMedals.reduce((acc, medal) => acc + medal.bronze, 0);
        setMedalDetails({ gold: goldCount, silver: silverCount, bronze: bronzeCount });
        setError(null);
      } else {
        setMedalDetails(null);
        setError(`País "${countryName}" não encontrado ou sem medalhas`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe o nome do país em inglês:</Text>
      <TextInput
        style={styles.input}
        value={countryName}
        onChangeText={text => setCountryName(text)}
        placeholder="Nome do país"
      />
      <Button title="Buscar Detalhes das Medalhas" onPress={fetchMedalDetails} />
      {error && <Text style={styles.error}>{error}</Text>}
      {medalDetails && (
        <View style={styles.medalDetails}>
          <Text style={styles.countryName}>{countryName}</Text>
          <Text>Ouro: {medalDetails.gold}</Text>
          <Text>Prata: {medalDetails.silver}</Text>
          <Text>Bronze: {medalDetails.bronze}</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  medalDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;

