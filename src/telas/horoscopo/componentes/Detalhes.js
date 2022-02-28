import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoApp, nomeApp, descricao, botao }) {
  return <>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <View style={estilos.logo}>
      <Image source={logoApp} style={estilos.imagemlogo} />
      <Texto style={estilos.nomeApp}>{ nomeApp }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>

    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Text style={estilos.textoBotao}>{ botao }</Text>
    </TouchableOpacity>
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  logo: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemlogo: {
    width: 32,
    height: 32,
  },
  nomeApp: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#FF6699",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})
