import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from './Home'

export default class Test2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent2 </Text>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
