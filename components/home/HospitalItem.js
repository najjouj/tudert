import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import Colors from '../../shared/Colors'

export default function HospitalItem ({hospital}) {

    return (
      
       
      
         <View style={{padding:10,width:180,borderRadius:10,borderWidth:1,borderColor:Colors.Light_GRAY,margin:5}}>
         <Image style={
      {width:"100%",height:110,borderTopLeftRadius:10,borderTopRightRadius:10}
       }
       source={{uri:hospital.attributes.image.data.attributes.url} }
       />
       
     <View style={{padding:7}}>
     <Text style={{fontFamily:"appfont-semi",fontSize:16,}}>{hospital.attributes.name}</Text>
     <Text style={{color:Colors.Gray}}>{hospital.attributes.adress}</Text>
   
     </View>
     </View>
     
       
      
    )
  
}

const styles = StyleSheet.create({})
