import React, { Component,useEffect,useState } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'
import {useRoute} from '@react-navigation/native';
import HeaderPage from '../components/shared/HeaderPage';
import HospitalInfo from '../components/hospitalDetail/HospitalInfo';
import Colors from '../shared/Colors';

export default function HospitalDetails () {
  const param=useRoute().params;
  const [hospital,setHospital]=useState();
  useEffect(()=>{
    setHospital(param.hospital)
  },
  []);
    return (
      <View>
      <View style={{position:'absolute', zIndex:10,margin:15}}>
      <HeaderPage title={''}/>
      </View>
        <Image 
         source={{uri:hospital?.attributes.image.data.attributes.url} }
         style={{width:'100%',height:260}}
        />
        <View style={{marginTop:-20, backgroundColor:Colors.white,borderTopRightRadius:20,borderTopLeftRadius:20,padding:20}}>
            <HospitalInfo hospital={hospital}/>
        </View>
       
      </View>
    )
  
}

const styles = StyleSheet.create({})
