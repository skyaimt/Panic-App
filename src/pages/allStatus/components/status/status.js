import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './statusStyle';
import * as images from '../../../../utils/const';
import NavigatorHeader from '../../../../utils/navigatorHeader';
import StatusView from '../statusView/statusView';
import * as StatusConst from '../../../../utils/statusConst';

export default class Status extends NavigatorHeader {
static navigationOptions = NavigatorHeader.navigationOptions;
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  getStatus() {
    return StatusConst.MOTIVATIONSTATUS.map((data, i) => {
        return (
          <StatusView key={i} status={data.status} />
        );
    });
  } 

  render() {
    return (
      <View style={styles.container}>
        <Image source = { images.BACKGROUND } style={styles.subContainer} >
          <View>
	          <View>
              <ScrollView>
	          	  {this.getStatus()}
              </ScrollView>
	          </View>
          </View>
        </Image>
      </View>
    );
  }
}
