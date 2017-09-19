import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform,
} from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';
import Communications from 'react-native-communications';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Recording from './recording'

export default class PanicDemo extends Component {
   watchID: ?number = null;
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      visible: false,
      }
  }

  onCancel() {
    this.setState({visible:false});
  }
  onOpen() {
    this.setState({visible:true});
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onFaceBook() {
  let shareOptions = {
      title: "React Native",
      message: "sunil",
      url: "http://facebook.github.io/react-native/",
      subject: "sunil"
    };
    this.onCancel();
    setTimeout(() => {
      Share.shareSingle(Object.assign(shareOptions, {
        "social": "facebook"
      }));
    },300);
  this.onWhatsapp();
  }

  onWhatsapp() {
    let shareOptions = {
      title: "React Native",
      message: this.state.initialPosition ,
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link"
    };
    this.onCancel();
    setTimeout(() => {
      Share.shareSingle(Object.assign(shareOptions, {
        "social": "whatsapp"
      }));
    },300);
  }

  onEmail() {
   this.onMessage();
   Communications.email(['skyaimt@gmail.com', 'ashish.k0094@gmail.com'],null,null,'Emergency Help',this.state.initialPosition)
  }

  onPhone() {
    this.onFaceBook();
    Communications.phonecall('911', true)
  }

  onMessage() {
    this.onCall();
    Communications.text('8423748504', this.state.initialPosition)
  }
  onClick(event) {
      this.onMessage();
      this.onCall();
   }
  onCall() {
    RNImmediatePhoneCall.immediatePhoneCall('8423748504')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onFaceBook.bind(this)}>
          <Text>Share Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onWhatsapp.bind(this)}>
          <Text>Share Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.phonecall('911', true)}>
          <Text style={styles.text}>Make phonecall</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onEmail.bind(this)}>
          <Text style={styles.text}>Send an email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text('8423748504', this.state.initialPosition)}>
          <Text style={styles.text}>Send a Message</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onClick.bind(this)}>
          <Text style={styles.text}>Emergency Calls</Text>
        </TouchableOpacity>
        <View>
        <Recording />
        </View>
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