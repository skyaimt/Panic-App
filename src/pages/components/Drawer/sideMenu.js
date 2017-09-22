import React, { Component } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Image } from 'react-native';
import * as images from '../../../utils/const';
import styles from './sideMenuStyle';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'home',
      userFullname: '',
      userId: '',
      value: [
        { name: 'Home', menuClick: this.props.onHome, images: images.HOME },
        { name: 'Setting', menuClick: this.props.onSetting, images: images.HOME },
        { name: 'Message', menuClick: this.props.onSetting, images: images.HOME },
      ],
      valueMenu: [
        { name: 'Whatsapp', menuClick: this.props.onSetting, images: images.HOME },
        { name: 'Gmail', menuClick: this.props.onSetting, images: images.HOME },
      ],

    };
    this.header = this.header.bind(this);
    this.content = this.content.bind(this);
  }


  onMain(data, props, image, key) {
    return (
      <View key={key} style={styles.drawerMenu}>
        <TouchableOpacity onPress={props} style={styles.menuList}>
          <Image source={image} style={styles.drawerProfileIcon }/>
          <Text style={styles.menuListText}>{data}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  header() {
    return (
      <View style={styles.header}>
        <StatusBar
          backgroundColor="#03887c"
          barStyle="light-content"
        />
        <View>
          <View style={styles.accountView}>
            <Image style={styles.accountImage} source={images.ACCOUNT} />
            <View style={styles.drawableTextView}>
              <Text style={styles.name}>Sunil Yadav</Text>
              <Text style={styles.id}>skyaimt@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>);
  }

  content() {
    const menuItems = this.state.value.map((data, i) => {
      return (
        this.onMain(data.name, data.menuClick, data.images, i)
      );
    });
    const menuFooterItems = this.state.valueMenu.map((data, i) => {
      return (
        this.onMain(data.name, data.menuClick, data.images, i)
      );
    });
    return (
      <View style={styles.content}>
        <View>
          <View>
            {menuItems}
            {menuFooterItems}
          </View>
        </View>
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        { this.header() }
        { this.content() }
      </View>
    );
  }
}