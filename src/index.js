import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './pages/home/home';
import Setting from './pages/setting/settingBacUp';


export const Stack = StackNavigator({
  Home: { screen: Home },
  Setting: { screen: Setting },
});

AppRegistry.registerComponent('sky', () => Stack);