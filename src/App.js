import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Simples from './componentes/Simples';

export default class App extends Component{
	render(){
		return(
			<View style={styles.conteudo}>
				<Simples texto='Flexível!'/>
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