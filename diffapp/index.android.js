import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import home from '../src/home';

export default class diffapp extends Component {
  render() {
    return (
      <View >
        <Text >
          Welcome ..!!
        </Text>
        <home />
      </View>
    );
  }
}


AppRegistry.registerComponent('diffapp', () => diffapp);
