import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Colors from '../../shared/Colors'

export default function SubHeading ({name,seeAll=true}) {
 
    return (
      <View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text style={{fontSize:20,fontFamily:'appfont-semi'}}> {name} </Text>
      { seeAll?<Text style={{fontFamily:'appfont',color:Colors.PRIMARY}} >See All</Text>:null}
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({})
