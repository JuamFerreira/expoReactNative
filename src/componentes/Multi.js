import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

/**
 * Função para inverter um texto.
 * @param props.texto Recebe o texto a ser invertivo
 * 
 * Colocamos export sem default para importar mais de uma função do componente na clase desejada.
 */
export const Inverter = props => {
	const inv = props.texto.split('').reverse().join('')
	return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = props =>{
	//Atribuição de valor com destruct 
	const [min, max] = [1, 60]
	//Gerando array com tamanho padrão 6 preenchido por zeros
	const numeros = Array(props.numeros || 6).fill(0)

	//Base para gerar prenchimento aleatório do array
	for(let i=0; i<numeros.length; i++){
		let novo = 0
		//Gerando números aleatórios únicos no array
		while(numeros.includes(novo)){
			novo = Math.floor(Math.random() * (max - min + 1)) + min
		}
		numeros[i] = novo
	}
	numeros.sort((a, b) => a-b)
	return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
}

// É possível exportar simutaneamente das duas formas e importar com ou sem chaves
export default Inverter