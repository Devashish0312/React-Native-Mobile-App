import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class myapp extends Component {
  render() {
    return (
      <View>
        <text>
          hello world
        </text>
        </View>
    );
  }
}


AppRegistry.registerComponent('myapp', () => myapp);
