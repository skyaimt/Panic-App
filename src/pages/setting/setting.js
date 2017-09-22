import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  AsyncStorage,
  Modal,
  TouchableHighlight,
} from 'react-native';
import NavigatorHeader from '../../utils/navigatorHeader';
import Header from '../components/Header/Header';
import * as images from '../../utils/const';
import styles from './settingStyle';
import Contacts from 'react-native-contacts'
import ContactList from '../components/Contact/contact'
let phone = [];
export default class Setting extends NavigatorHeader {
  static navigationOptions = NavigatorHeader.navigationOptions;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: [],
      test: '',
      input: '',
      mobileNo: '',
      modalVisible: false,
    }
    this.onContact = this.onContact.bind(this);
    this.onContactPick = this.onContactPick.bind(this);
  }
  componentWillReceiveProps() {

  }
  onContact() {
    this.setModalVisible(true)
    console.log("contacts")
    Contacts.getAll((err, contacts) => {
    this.forceUpdate()
      if(err === 'denied'){
      } 
      else {
        this.setState({phoneNumber:contacts})
        phone = contacts;
      }
    })
    this.setModalVisible(true)
  }

  onContactList(val) {
    console.log(val)
    this.setState({input: val })
    console.log(this.state.input)
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

 onContactPick() {
    return this.state.phoneNumber.map((data, i) => {
    const mobileNumber = ((data.phoneNumbers == null) ? '' :data.phoneNumbers[0])
    mobilePhone = (typeof mobileNumber == 'object' ? mobileNumber.number : '');
    if(typeof mobileNumber == 'object'){
      return (
        <TouchableOpacity key={i} onPress={() => this.onContactList(data.phoneNumbers[0].number)}>
          <Text style={styles.selectText}>{data.givenName}+{data.phoneNumbers[0].number}</Text>
        </TouchableOpacity>
      );
    }
  });
}

  render() {
    console.log(this.onContactPick().length)
    return (
      <View style={styles.container}>
        <Image source = { images.BACKGROUND } style={styles.subContainer} >
          <View style={styles.headerView}>
            <Header leftIcon={images.CROSS} title="Setting" leftIconPress={()=>this.props.navigation.goBack(null)}/>
          </View>
          <View style={styles.middleView}>
            <View style={styles.textView}>
              <Text>Select which contacts will recive a text message in case of emergency</Text>
            </View>
            <View style={styles.addInputView}>
              <TouchableOpacity onPress={this.onContact}>
                <Image source={images.ADD} style={styles.addImage}/>
              </TouchableOpacity>
              <TextInput
                style={styles.inputField}
                onChangeText={(input) => this.setState({input})}
                value={this.state.input}
                placeholder= "enter a number"
                underlineColorAndroid='rgba(0,0,0,0)'
              />
            </View>
            <ScrollView>
              {this.onContactPick()}
            </ScrollView>
          </View>
        </Image>
      </View>
    );
  }
}