import React, { Component,useEffect,useState } from 'react'
import { Text, StyleSheet, View ,Image, ScrollView} from 'react-native'
import{ useRoute } from '@react-navigation/native';

import AppointmentHospitalInfo from '../components/BookAppointment/AppointmentHospitalInfo';
import HorizontalLine from '../components/shared/HorizontalLine';
import ActionButton from '../components/hospitalDetail/ActionButton';
import BookingSection from '../components/BookAppointment/BookingSection';





export default function BookAppointement (){
  const param=useRoute().params;
  const [hospital,sethospital]=useState();
  useEffect(()=>{
    sethospital(param?.hospital)
  },[])
    return hospital&&(
      <ScrollView style={{padding:20}}>
        <AppointmentHospitalInfo hospital={param.hospital}/>
      <HorizontalLine/>
      <ActionButton/>
      <View style={{marginBottom:10}}></View>
      <HorizontalLine/>
      <BookingSection hospital={param.hospital}/>
{/*       
        <HorizontalLine/>
        <ActionButton />
        <View style={{marginBottom:10}}></View>
        <HorizontalLine/>
        <BookingSection/> */}
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({})

