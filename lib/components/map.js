import React, { Component } from  'react';

import Navigation  from './navigator'

import {
  View,
  Navigator,
  Text
} from 'react-native';

export default  class Maps extends Component  {
  render()  {
    <View style={styles.container}>
          <ToolbarAndroid style={styles.toolbar}
                          title={this.props.title}
                          onIconClicked={this.props.navigator.pop}
                          titleColor={'#FFFFFF'}/>
          <Text>
            Second screen
          </Text>
        </View>
  }

}
