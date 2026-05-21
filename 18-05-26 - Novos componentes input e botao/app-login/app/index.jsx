import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Logo from '../assets/images/img.jpg';




export default function Index() {
  const [email, SetEmail] = useState('');
  const [senha, setSenha] = useState('');

  function Login(){

  }

  return (
    <ScrollView>
      <Image
      source={Logo}
      resizeMethod="contain"
     
      />

      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.sub}>Para prosseguir insira seus dados</Text>

    </ScrollView>
  );
}

const estilos= StyleSheet.create({
 
})
