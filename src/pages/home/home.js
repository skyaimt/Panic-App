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
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';
import Communications from 'react-native-communications';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Recording from './recording'
import Camera from 'react-native-camera';
import RNFlash from 'react-native-flash';
import Contacts from 'react-native-contacts'
import PhoneBook from './phoneBook';
import Header from '../components/Header/Header';
import styles from './homeStyle';
import Footer from '../components/Footer/Footer';

export default class PanicDemo extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
    gesturesEnabled: false,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Header />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.title}>Sunil</Text>
        </View>
        <View style={styles.footerView}>
          <Footer />
        </View>
      </View>
    );
  }
}
