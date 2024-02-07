import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Colors from '../../shared/Colors'

export default function HospitalDoctorTab ({activeTab}) {
    const[activeIndex,setactiveIndex]=useState(0);
    return (
      <View style={{marginTop:10}}>
        <View style={{display:'flex', flexDirection:'row' , alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=>{setactiveIndex(0);activeTab('Hospital')}} style={(activeIndex==0)?styles.activeTab:styles.inactiveTab}>
                <Text style={(activeIndex==0)?styles.activeText:styles.inactiveText}>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setactiveIndex(1);activeTab('Doctor')}} style={(activeIndex==1)?styles.activeTab:styles.inactiveTab}>
                <Text style={(activeIndex==1)?styles.activeText:styles.inactiveText}>Doctors</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
    activeText:{
        fontFamily:'appfont',
        fontSize:18,
        textAlign:'center',
        color:Colors.PRIMARY
    },
    inactiveText:{
        fontFamily:'appfont',
        fontSize:18,
        textAlign:'center',
        color:Colors.Gray
    },
    activeTab:{
        padding:3,
        borderBottomWidth:2,
      
        borderBottomColor:Colors.PRIMARY
    },
    inactiveTab:{
        padding:3,
        borderBottomWidth:1,
      
        borderBottomColor:Colors.Gray
    }
})
