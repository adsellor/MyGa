import React,{ Component } from 'react';
import  {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class ReportBox  extends Component{
  render(){
    return(
      <View
      style={styles.box}>
      <TextInput
      style={styles.report}
    />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  report: {
    color: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 230,
    height: 230,
    borderRadius: 60,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
