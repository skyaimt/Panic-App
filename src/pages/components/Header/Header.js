import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './HeaderStyle'
import * as images from '../../../utils/const'

export default class PanicDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        </View>
        <View>
        	<Text style={styles.title}>Help Us</Text>
        </View>
        <View>
        	<TouchableOpacity>
        		<Image source={images.SETTING} />
        	</TouchableOpacity>
        </View>
      </View>
    );
  }
}
