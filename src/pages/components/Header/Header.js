import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './HeaderStyle'

export default class PanicDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftIconStyle}>
          <TouchableOpacity onPress={this.props.leftIconPress}>
            <Image source={this.props.leftIcon} style={styles.leftIcon} />
          </TouchableOpacity>
        </View>
        <View  style={styles.titleStyle}>
        	<Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View  style={styles.leftIconStyle}>
        	<TouchableOpacity>
        		<Image source={this.props.rightIcon} style={styles.leftIcon}/>
        	</TouchableOpacity>
        </View>
      </View>
    );
  }
}
