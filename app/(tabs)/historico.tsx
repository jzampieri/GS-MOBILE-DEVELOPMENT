import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getOcorrencias } from '../../lib/storage';
import { Ocorrencia } from '../../types/ocorrencia';

export default function Historico() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  useEffect(() => {
    getOcorrencias().then(setOcorrencias);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Ocorrências</Text>
      {ocorrencias.length === 0 ? (
        <Text style={styles.empty}>Nenhuma ocorrência registrada.</Text>
      ) : (
        <FlatList
          data={ocorrencias}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>📍 Local:</Text>
              <Text style={styles.text}>{item.local}</Text>
              <Text style={styles.label}>⏱ Duração:</Text>
              <Text style={styles.text}>{item.duracao}</Text>
              <Text style={styles.label}>💸 Prejuízos:</Text>
              <Text style={styles.text}>{item.prejuizos}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginTop: 5,
  },
  text: {
    color: '#555',
    marginBottom: 5,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#777',
  },
});