import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function Registro({ navigation }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')

  return (
    <View>
      <Text> Cadastre-se </Text>

      <TextInput
        placeholder="E-mail"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        placeholder="Confirme a Senha"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />

      <TouchableOpacity
        onPress={() => navigation.replace('Login')}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  )
}

const estilos = StyleSheet.create({
 
});