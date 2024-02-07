import React, { Component,useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HospitalDoctorTab from '../components/HospitalDoctorScreens/HospitalDoctorTab';

export default function Explore () {
    const [activeTab,setactiveTab]=useState('Hospital');
  
    return (
      <View style={{
        padding:20
      }}>
        <Text style={{
            fontSize:26,
            fontFamily:'appfont-semi',
        }}> Explore </Text>
        <HospitalDoctorTab activeTab={(value)=>setactiveTab(value)}/>
      
      </View>
    )
  
}

const styles = StyleSheet.create({})
