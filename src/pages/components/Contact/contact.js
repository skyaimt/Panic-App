import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import  styles from './contactStyle.js';
let value;
export default class PanicDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onContactPick(value)}  style={styles.subContainer}>
        	<Text>{this.props.firstName}</Text>
        	<Text>{' '}{this.props.family}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
