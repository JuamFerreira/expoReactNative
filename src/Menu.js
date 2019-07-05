import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

//Quando o componente não está exportado por default é necessário o uso de chaves no import,
//Mas pode ser usados das duas formas para o mesmo componente
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'

/**
 * Classe principal para receber os componentes criados 
 * e gerar a navegação por menu na aplicação
 * 
 * @method Componente Recebe o componente a ser direcionado e os atributos @screen e/ou @navigationOptions
 * @screen recebe o componente (mas sem parâmetros), ou arrow function com o JSX direto
 * @navigationOptions recebe, entre outros o @title a ser exibido no Menu
 *  
 */
export default createDrawerNavigator ({
	Contador: {
		screen: () => <Contador numeroInicial={10} />
	},
	MegaSena: {
		screen: () => <MegaSena numeros={6} />,
		navigationOptions: { title: 'Mega Sena' }
	},
	Inverter: {
		screen: () => <Inverter texto='Inversão TOTAL' />
	},
	ParImpar: {
		screen: () => <ParImpar numero={100} />,
		navigationOptions: {title: 'Par ou Impar'}
	},
	Simples: {
		screen: () => <Simples texto='Texto simples' />
	}
}, { drawerWidth: 300 })