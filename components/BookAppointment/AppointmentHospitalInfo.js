import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import HeaderPage from '../shared/HeaderPage'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/Colors';
import HorizontalLine from '../shared/HorizontalLine';
import ActionButton from '../hospitalDetail/ActionButton';
import BookingSection from './BookingSection';

export default function AppointmentHospitalInfo ({hospital}){

    return (
      <View>
        <HeaderPage title={'Book appointment'}/>
        <View style={{marginTop:10, display:'flex',flexDirection:'row',alignItems:'center',gap:5,marginBottom:10}}>
           <View>
           <Image style={{
                width:100,height:100
,borderRadius:99            }}
            source={{uri:hospital.attributes.image.data.attributes.url}}
            />
           </View>
      
      <View>
      <Text style={{
            fontSize:20,
            fontFamily:'appfont-semi',
            marginBottom:5,
        }}> {hospital.attributes.name} </Text>
        <View style={{display:'flex',flexDirection:'row', gap:5, alignItems:'center',marginLeft:5} }>
        <Ionicons name="location" size={20} color={Colors.PRIMARY} />
        <Text style={{
            fontSize:16,fontFamily:'appfont',color:Colors.Gray,width:'75%'
        }}>{hospital.attributes.adress}</Text>
        </View>
      </View>
        </View>
      
      </View>
    )
  
}

const styles = StyleSheet.create({})
