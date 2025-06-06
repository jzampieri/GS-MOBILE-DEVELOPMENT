import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Ajuda() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ajuda</Text>
      <Text style={styles.description}>
        Caso você esteja enfrentando um apagão, siga estas orientações para garantir sua segurança e minimizar prejuízos:
      </Text>
      <View style={styles.tipBox}>
        <Text style={styles.tip}>🔦 Mantenha lanternas e baterias por perto.</Text>
        <Text style={styles.tip}>🚪 Evite abrir a geladeira para conservar os alimentos.</Text>
        <Text style={styles.tip}>📱 Use o aplicativo para registrar a ocorrência e os danos.</Text>
        <Text style={styles.tip}>🏥 Em caso de emergência, busque um posto de saúde ou delegacia.</Text>
        <Text style={styles.tip}>🔋 Desligue equipamentos eletrônicos para evitar queima quando a energia voltar.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  tipBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
  },
});
