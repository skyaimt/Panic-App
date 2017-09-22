import React, { Component } from 'react';

export default class NavigatorHeader extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerMode: 'none',
    header: null,
    gesturesEnabled: false,
  };
}
