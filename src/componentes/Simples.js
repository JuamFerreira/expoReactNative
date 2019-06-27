import React from 'react'
import { Text, View } from 'react-native'

/**
 * Possibilidades de construir a mesma funcionalidade
 * de formas diferentes.
 */

 /* Componente baseado em função padrão */
// export default function(props){
// 	return <Text>{props.texto}</Text>
// }

 /* Componente baseado em "Arrow function (função seta) em uma linha e sem encapsulamento (return implicito) */
// export default props => <Text>Arrow: {props.texto}</Text>

 /* Componente baseado em "Arrow function (função seta), varias linhas com encapsulamento(return implicito) */
// export default props =>
// 	<View>
// 		<Text>Arrow 1: {props.texto}</Text>
// 		<Text>Arrow 2: {props.texto}</Text>
// 	</View>

 /* Componente baseado em "Arrow function (função seta), varias linhas com Array (return implicito) */
export default (props) => [
	<Text key={1}>Arrow 1: {props.texto}</Text>,
	<Text key={2}>Arrow 2: {props.texto}</Text>
]