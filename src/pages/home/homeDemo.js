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
  Image,
  Linking,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';
import Communications from 'react-native-communications';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import Recording from './recording'
import Camera from 'react-native-camera';
import RNFlash from 'react-native-flash';
import Contacts from 'react-native-contacts'
import PhoneBook from './phoneBook';

export default class PanicDemo extends Component {
   watchID: ?number = null;
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      visible: false,
      phoneNumber:'',
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
    }
  }

   switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;
    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }
    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }


  onContact() {
    console.log("contacts")
    Contacts.getAll((err, contacts) => {
      if(err === 'denied'){
      } else {
        console.log(contacts)
         this.setState({phoneNumber:contacts})
          
      }
    })
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
      subject: "sunil",
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
    Linking.openURL('whatsapp://send?text='+this.state.initialPosition+'&phone=+919958798640')
  }

  onEmail() {
   this.onMessage();
   this.onPhone();
   this.onWhatsapp();
   this.onFaceBook();
   //Communications.email(['skyaimt@gmail.com', 'ashish.k0094@gmail.com'],null,null,'Emergency Help',this.state.initialPosition)
  }

  onPhone() {
    this.onFaceBook();
    Communications.phonecall('911', true)
  }

  onMessage() {
    this.onCall();
    Communications.text('8423748504', this.state.initialPosition)
  }

  onCall() {
    RNImmediatePhoneCall.immediatePhoneCall('8423748504')
  }
  render() {
    let PhoneList
    if(this.state.phoneNumber.length) {
    PhoneList=this.state.phoneNumber.map((data, i) => {
          return (
            <PhoneBook
            key = {i}
            firstName = {data.firstName}
            middleName = {data.givenName}
            />
          )
        })
    }
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
        <TouchableOpacity onPress={this.onCall.bind(this)}>
          <Text style={styles.text}>Emergency Calls</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => RNFlash.turnOnFlash()}>
          <Text style={styles.text}>Flash On</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback 
        onPress={() => RNFlash.turnOnFlash()}
        onPressIn={this.onCall.bind(this)} 
        onPressOut={() => Communications.text('8423748504', this.state.initialPosition)}>
        <View>
          <Text>PanicButton</Text>
        </View>
        </TouchableWithoutFeedback>
        <View style={{height:100}}>
          <ScrollView>
            {PhoneList}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={this.onContact.bind(this)}>
          <Text style={styles.text}>Contact</Text>
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

