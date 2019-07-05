import { registerRootComponent } from 'expo'
import { activateKeepAwake } from 'expo-keep-awake'

// import App from './src/App'
import Menu from './src/Menu'

if (__DEV__) {
	activateKeepAwake()
}

registerRootComponent(Menu)
