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
import * as images from '../../../../utils/const';

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
              <Image source={images.COPY} style={styles.copyShareImage} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.likeImage}>
            <View style={styles.likeView}>
              <Image source={images.LIKE} style={styles.copyShareImage} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.likeImage}>
            <View style={styles.likeView}>
              <Image source={images.SHARE} style={styles.copyShareImage} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
