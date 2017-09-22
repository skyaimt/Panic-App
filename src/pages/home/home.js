import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform,
  Image,
  Linking,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import Drawer from 'react-native-drawer';
import Share, {ShareSheet, Button} from 'react-native-share';
import Communications from 'react-native-communications';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Recording from './recording'
import Camera from 'react-native-camera';
import RNFlash from 'react-native-flash';
import Contacts from 'react-native-contacts'
import PhoneBook from './phoneBook';
import Header from '../components/Header/Header';
import SideMenu from '../components/Drawer/sideMenu';
import styles from './homeStyle';
import Footer from '../components/Footer/Footer';
import * as images from '../../utils/const'
import NavigatorHeader from '../../utils/navigatorHeader';

export default class PanicDemo extends NavigatorHeader {
  static navigationOptions = NavigatorHeader.navigationOptions;

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
    };
    this.openControlPanel = this.openControlPanel.bind(this);
  }

  closeControlPanel = () => {
      this._drawer.close()
  };

  openControlPanel = () => {
      this._drawer.open()
  };

  navigateTo(text){
    this.state.navigate(text);
  }
  
  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          content={<SideMenu 
            onSetting={() => { this.navigateTo('Setting'); }}
           />}
          type="overlay"
          tapToClose={true}
          openDrawerOffset={90}
          styles={drawerStyles}
          panOpenMask={0.3}
          closedDrawerOffset={-3}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
        >
          <StatusBar
           hidden={true}
          />
          <View style={styles.container}>
            <View style={styles.headerView}>
              <Header leftIcon={images.DRAWABLE} title="TITLE" leftIconPress= {this.openControlPanel} />
            </View>
            <View style={styles.middleView}>
              <Text style={styles.title}>Sunil</Text>
            </View>
            <View style={styles.footerView}>
              <Footer />
            </View>
        </View>
      </Drawer>
    );
  }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}