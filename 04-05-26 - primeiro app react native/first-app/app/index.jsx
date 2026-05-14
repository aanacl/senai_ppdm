import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/imagem.jpg';

export default function Index() {
  return (
    <ScrollView style={estilos.corpo}>
      <Text style={estilos.titulo}>My First App</Text>
      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>sobre o app</Text>
        <Text style={estilos.texto}>primeiro aplicativo feito com React Native desenvolvido pelo Senai the best!</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>o que aprenderei</Text>
        <Text style={estilos.item}>push notification</Text>
        <Text style={estilos.item}>acesso aos recursos nativos</Text>
        <Text style={estilos.item}>acesso a Api externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>o que vou precisar</Text>
        <Text style={estilos.item}>node js</Text>
        <Text style={estilos.item}>vs code</Text>
        <Text style={estilos.item}>emulador ou celular</Text>
        <Text style={estilos.item}>ser um(a) bom(boa) aluno(a)</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: '#dd90f9',
    padding: 20
  },
  titulo: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10
  }
});