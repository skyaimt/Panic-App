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
} from 'react-native';
import NavigatorHeader from '../../utils/navigatorHeader';
import Header from '../components/Header/Header';
import * as images from '../../utils/const';
import styles from './settingStyle';
import Contacts from 'react-native-contacts'
import InputField from './components/InputField'


let phone = [];
export default class Setting extends NavigatorHeader {
  static navigationOptions = NavigatorHeader.navigationOptions;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: [],
      test: '',
      mobileNo: '',
      modalVisible: false,
      textNumber:''
    }
    this.onContact = this.onContact.bind(this);
    this.onContactPick = this.onContactPick.bind(this);
  }
  componentWillReceiveProps() {

  }
  onContact(value) {
    this.setState({text: value})    
    this.setModalVisible(true)
    Contacts.getAll((err, contacts) => {
    this.forceUpdate()
      if(err === 'denied'){
      } 
      else {
        this.setState({phoneNumber:contacts})
      }
    })
    this.setModalVisible(true)
  }

  onContactList(val) {
    if(this.state.text=="textMessage") {
      this.setState({textNumber: val })
    }
    else if(this.state.text=="textCall") {
      this.setState({input: val })
    }
    this.setModalVisible(!this.state.modalVisible)
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
          <Text style={styles.selectText}>{data.givenName}{' '}{data.familyName}{' '}{data.phoneNumbers[0].number}</Text>
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
            <InputField text="Select which contacts will recive a text message in case of emergency"
              input={this.state.textNumber}
              onContact={()=>this.onContact("textMessage")}
              placeholder="enter a number"
            />
            <InputField text="Select which contacts will recive a text message in case of emergency"
              input={this.state.input}
              onContact={()=>this.onContact("textCall")}
              placeholder="enter a number"
            />
            <InputField text="Select which contacts will recive a text message in case of emergency"
              input={this.state.input}
              onContact={this.onContact}
              placeholder="enter a number"
            />
            <InputField text="Select which contacts will recive a text message in case of emergency"
              input={this.state.input}
              onContact={this.onContact}
              placeholder="enter an email"
            />
            <InputField
              input={this.state.input}
              onContact={this.onContact}
              placeholder="enter an email"
            />
          </View>
            <View style={styles.ModalView}>
              <Modal
                animationType="none"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Please select a value")}}
              >
                <View style={styles.listView}>
                  <ScrollView>
                    {this.onContactPick()}
                  </ScrollView>
               </View>
              </Modal>
            </View>
        </Image>
      </View>
    );
  }
}