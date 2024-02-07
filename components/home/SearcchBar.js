import React, { Component,useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/Colors';

export default function SearcchBar ({setSearchText}) {
 
    const [searchInput,setSearchInput]=useState();
    return (
      <View style={{marginTop:20, display:'flex',flexDirection:'row',gap:7,borderWidth:.7,padding:10,borderRadius:8,borderColor:Colors.Gray,alignItems:'center'}}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
       <TextInput style={{width:'100%',fontFamily:'appfont'}} onChangeText={(value)=>{setSearchInput(value)}} onSubmitEditing={()=>{setSearchText(searchInput)}} placeholder='Search'></TextInput>
      </View>
    )
  
}

const styles = StyleSheet.create({})
