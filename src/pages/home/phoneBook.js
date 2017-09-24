import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

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
        <TouchableOpacity>
        	<Text>{this.props.firstName}</Text>
        	<Text>{this.props.middleName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

AppRegistry.registerComponent('sky', () => PanicDemo);
(input) => this.setState({input: input})