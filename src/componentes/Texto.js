import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let estilo = estilos.texto;
  
  if(style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Texto style={[style, estilo]}>{ children }</Texto>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  }
});