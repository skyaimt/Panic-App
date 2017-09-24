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
import styles from './statusStyle';
import * as images from '../../../../utils/const';
import NavigatorHeader from '../../../../utils/navigatorHeader';
import StatusView from '../statusView/statusView';

export default class Status extends NavigatorHeader {
static navigationOptions = NavigatorHeader.navigationOptions;
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source = { images.BACKGROUND } style={styles.subContainer} >
          <View>
	          <View>
	          	<StatusView status="whats app status will appear here"
                like={images.HOME}
                share={images.HOME}
                copy={images.HOME}
              />
	          </View>
          </View>
        </Image>
      </View>
    );
  }
}
