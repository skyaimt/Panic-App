import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './pages/home/home';


export const Stack = StackNavigator({
  Home: { screen: Home },
});

AppRegistry.registerComponent('sky', () => Stack);