import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import HospitalCardItem from '../shared/HospitalCardItem'
import Colors from '../../shared/Colors'
import { useNavigation } from '@react-navigation/native';

export default function HospitalListBig ({hospitalList}) {
const navigation=useNavigation();
    return (
      <View style={{marginTop:15}}>
        <FlatList
        data={hospitalList}
        renderItem={({item})=>
      
        <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{hospital:item})}>
        <HospitalCardItem hospital={item}/>
      </TouchableOpacity>
     
        }
        />
      </View>
    )
  
}

const styles = StyleSheet.create({})
