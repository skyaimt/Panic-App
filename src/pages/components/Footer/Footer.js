import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './FooterStyle'
import * as images from '../../../utils/const'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        	<TouchableOpacity>
        		<Image source={images.SETTING} />
        	</TouchableOpacity>
        </View>
        <View>
        	<TouchableOpacity>
        		<Image source={images.SETTING} />
        	</TouchableOpacity>
        </View>
        <View>
        	<TouchableOpacity>
        		<Image source={images.SETTING} />
        	</TouchableOpacity>
        </View>
        <View>
        	<TouchableOpacity>
        		<Image source={images.SETTING} />
        	</TouchableOpacity>
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
