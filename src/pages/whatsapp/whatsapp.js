import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './whatsappStyle';
import * as images from '../../utils/const';
import NavigatorHeader from '../../utils/navigatorHeader';
import Header from '../components/Header/Header';


export default class PanicDemo extends NavigatorHeader {
static navigationOptions = NavigatorHeader.navigationOptions;
  constructor(props) {
    super(props);
    this.state = {
    	navigate: this.props.navigation.navigate,
    }
  }

	navigateTo(text){
    this.state.navigate(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source = { images.BACKGROUND } style={styles.subContainer} >
       		<View style={styles.headerView}>
            <Header leftIcon={images.CROSS} title="Whatsapp" leftIconPress={()=>this.props.navigation.goBack(null)}/>
          </View>
          <View>
	          <TouchableOpacity onPress={() => { this.navigateTo('allStatus')}}>
	          	<Text>Motivation Status</Text>
	          </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}