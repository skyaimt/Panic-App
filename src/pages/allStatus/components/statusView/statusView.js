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
import styles from './statusViewStyle';

export default class StatusView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text>{this.props.status}</Text>
        </View>
        <View style={styles.copylikeView}>
          <TouchableOpacity onPress={this.likeImage}>
            <View style={styles.likeView}>
              <Image source={this.props.like}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.likeImage}>
            <View style={styles.likeView}>
              <Image source={this.props.copy}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.likeImage}>
            <View style={styles.likeView}>
              <Image source={this.props.share}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
