import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class App extends Component{
  render(){
	return (
	  <View style={styles.conteudo}>
		<Text>testando</Text>
		<Simples texto='Flexível!'/>
		<ParImpar numero={51} />
	  </View>
	)
  }
}

const styles = StyleSheet.create({
	conteudo:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// f20:{
	// 	fontSize: 40,
	// }
})
