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
import styles from './InputFieldStyle'
import * as images from '../../../utils/const';

export default class PanicDemo extends Component {
  watchID: ?number = null;
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.addInputView}>
          <TouchableOpacity onPress={this.props.onContact}>
            <Image source={images.ADD} style={styles.addImage}/>
          </TouchableOpacity>
          <TextInput
            style={styles.inputField}
            onChangeText={this.props.onChangeText}
            value={this.props.input}
            keyboardType={this.props.keyboardType}
            placeholder= {this.props.placeholder}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>
      </View>
    );
  }
}