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
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './allStatusStyle';
import * as images from '../../utils/const';
import NavigatorHeader from '../../utils/navigatorHeader';
import Header from '../components/Header/Header';
import Status from './components/status/status';

export default class AllStatus extends NavigatorHeader {
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
      	<View style={styles.headerView}>
           <Header leftIcon={images.CROSS} title="Whatsapp" leftIconPress={()=>this.props.navigation.goBack(null)}/>
      	</View>
          	<ScrollableTabView>
			        <Status tabLabel="Whatsapp Status" />
			        <Status tabLabel="Favourite" />
			      </ScrollableTabView>
      </View>
    );
  }
}