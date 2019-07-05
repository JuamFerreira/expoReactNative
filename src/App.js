import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

//Quando o componente não está exportado por default é necessário o uso de chaves no import,
//Mas pode ser usados das duas formas para o mesmo componente
import Inverter, { MegaSena } from './componentes/Multi'

export default class App extends Component{
	render(){
		return (
			<View style={styles.conteudo}>
				<Text>Uma frase qualquer!</Text>
				<Simples texto='Flexível!'/>
				<ParImpar numero={90} />
				<Inverter texto='Invertendo arara'/>
				<MegaSena numeros = {6} />
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
