import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Appointement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container:{ flex: 1,
    backgroundColor: '#f5b041',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
