import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const dados = [
  {
    id: '1',
    temperatura: '25°C',
    umidade: '70%',
    vento: '12 km/h',
  },
  {
    id: '2',
    temperatura: '28°C',
    umidade: '65%',
    vento: '15 km/h',
  },
  {
    id: '3',
    temperatura: '22°C',
    umidade: '80%',
    vento: '8 km/h',
  },
];

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Relatório de Medições</Text>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1779/1779940.png',
              }}
              style={styles.imagem}
            />

            <View>
              <Text style={styles.texto}>
                🌡 Temperatura: {item.temperatura}
              </Text>
              <Text style={styles.texto}>
                💧 Umidade: {item.umidade}
              </Text>
              <Text style={styles.texto}>
                🌬 Vento: {item.vento}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1E88E5',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 4,
  },

  imagem: {
    width: 60,
    height: 60,
    marginRight: 15,
  },

  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
});