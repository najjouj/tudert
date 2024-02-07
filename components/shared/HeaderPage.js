import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import{ useNavigation } from '@react-navigation/native';

export default function HeaderPage ({title}) {
const navigation=useNavigation();
    return (
      <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:25,fontFamily:'appfont-semi'}}> {title} </Text>
      </View>
    )
  
}

const styles = StyleSheet.create({})
