import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import {useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
export default function Headeer (){
  const {isLoaded,isSignedIn,user}=useUser();
  if(!isLoaded || !isSignedIn)
    {return null}
    return (
      <View style={{display:'flex',
      flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <View style={styles.row}>
        <View>
          <Image  source={{uri:user.imageUrl}} style={{height:50,width:50,borderRadius:99}}/>
        </View>
       <View>
       <Text style={{fontFamily:'appfont'}}> Hello, 👋</Text>
        <Text style={styles.name}> {user.fullName} </Text>
       </View>
       
      </View>
      <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
    )
  
}

const styles = StyleSheet.create({
  row:{
    display:'flex',
    flexDirection:'row',
    gap:7,
    alignItems:'center'
  },
  name:{
    fontSize:18,
    fontFamily:'appfont-bold'
  }
})

