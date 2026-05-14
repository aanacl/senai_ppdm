/*import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header'
import tarefas from './dados/tarefas';



function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto}/>
      <Text style={estilos.titulo}>{item.title}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='sesi produtividade'/>
      <FlatList
      data={tarefas}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
 
})*/

import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image
} from "react-native";

import Header from './components/Header'
import tarefas from './dados/tarefas';

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} />

      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>{item.title}</Text>

        <Text style={estilos.status}>{item.status}</Text>

        <Text style={estilos.desc}>
          {item.description}
        </Text>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='SESI Produtividade' />

      <FlatList
        data={tarefas}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  card: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  foto: {
    width: '100%',
    height: 180,
  },

  conteudo: {
    padding: 15,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },

  status: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
  },

  desc: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 22,
  },
})
