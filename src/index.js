import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './pages/home/home';
import Setting from './pages/setting/settingBacUp';
import whatsApp from './pages/whatsapp/whatsapp';
import allStatus from './pages/allStatus/allStatus';


export const Stack = StackNavigator({
  Home: { screen: Home },
  Setting: { screen: Setting },
  whatsapp: { screen: whatsApp },
  allStatus: { screen: allStatus },
});

AppRegistry.registerComponent('sky', () => Stack);