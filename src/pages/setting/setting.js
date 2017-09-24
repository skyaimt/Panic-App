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
  Dimensions,
} from 'react-native';
import NavigatorHeader from '../../utils/navigatorHeader';
import Header from '../components/Header/Header';
import * as images from '../../utils/const';
import styles from './settingStyle';
import Contacts from 'react-native-contacts'
import InputField from './components/InputField'
const { width, height } = Dimensions.get('window');
 
let phone = [];
export default class Setting extends NavigatorHeader {
  static navigationOptions = NavigatorHeader.navigationOptions;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: [],
      test: '',
      modalVisible: false,
      input:'',
    }
    this.onContact = this.onContact.bind(this);
    this.onContactPick = this.onContactPick.bind(this);
    this.onSaveDetail = this.onSaveDetail.bind(this);
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
    if(this.state.text == "textMessage") {
      this.setState({textNumber: val })
    }
    else if(this.state.text == "textCall") {
      this.setState({input: val })
    }
    else if(this.state.text == "whatsapp") {
      this.setState({whatsappInput: val })
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
          <TouchableOpacity style={styles.phoneList} key={i} onPress={() => this.onContactList(data.phoneNumbers[0].number)}>
            <Text style={styles.selectText}>{data.givenName}{' '}{data.familyName}{' '}{data.phoneNumbers[0].number}</Text>
          </TouchableOpacity>
        );
      }
    });
  }

  onSaveDetail() {
    const allValues=[this.state.textNumber,this.state.input, this.state.whatsappInput, this.state.inputFirstEmail, this.state.inputSecondEmail]
    AsyncStorage.setItem('userDetails', JSON.stringify(allValues));
    AsyncStorage.getItem('userDetails', (err, result) => {
      let allValues = JSON.parse(result)

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
              onChangeText={(textNumber) => this.setState({textNumber})}
              onContact={()=>this.onContact("textMessage")}
              placeholder="enter a number"
              keyboardType={'phone-pad'}
            />
            <InputField text="Select which contacts will recive call in case of emergency"
              input={this.state.input}
              onChangeText={(input) => this.setState({input: input})}
              onContact={()=>this.onContact("textCall")}
              placeholder="enter a number"
              keyboardType={'phone-pad'}
            />
            <InputField text="Select which contacts will recive a whatsapp message in case of emergency"
              input={ this.state.whatsappInput }
              onContact={()=>this.onContact("whatsapp")}
              onChangeText={(whatsappInput) => this.setState({whatsappInput})}
              placeholder="enter a number"
              keyboardType={'phone-pad'}
            />
            <InputField text="Select which contacts will recieve emails in case of emergency"
              input={this.state.inputFirstEmail}
              onChangeText={(inputFirstEmail) => this.setState({inputFirstEmail})}
              placeholder="enter an email"
              keyboardType={'email-address'}
            />
            <InputField
              input={this.state.inputSecondEmail}
              onChangeText={(inputSecondEmail) => this.setState({inputSecondEmail})}
              placeholder="enter an email"
              keyboardType={'email-address'}
            />
            <TouchableOpacity onPress = {this.onSaveDetail}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
            <View style={styles.ModalView}>
              <Modal
                animationType="none"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Please select a value")}}
              >
                <View style={[styles.listView,{marginTop: (this.state.text == "textMessage") ?
                  height / 3.8 : (this.state.text == "textCall") ?
                  height / 2.42 : height / 1.775}]}
                >
                  <ScrollView style={styles.scrollView}>
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