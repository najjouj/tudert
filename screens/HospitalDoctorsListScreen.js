import React, { Component,useEffect, useState } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import{ useRoute } from '@react-navigation/native';
import HeaderPage from '../components/shared/HeaderPage';
import HospitalDoctorTab from '../components/HospitalDoctorScreens/HospitalDoctorTab';
import HospitalListBig from '../components/HospitalDoctorScreens/HospitalListBig';
import GlobalAPI from '../services/GlobalAPI';
import Colors from '../shared/Colors';

export default function HospitalDoctorsListScreen () {
  const param=useRoute().params;
  const [hospitalList,sethospitalList]=useState([]);
  const [activeTab,setactiveTab]=useState('Hospital');
   useEffect(()=>{
    getHospitalsBycategory();
    console.log('use effect otology');
  },[])
  const getHospitalsBycategory=()=>{
    GlobalAPI.getHospitalsBycategory(param?.category).then(res=>{
      console.log(res.data);
      sethospitalList(res.data.data);
      console.log('get hospitals otology');
    
    }).catch(err=>{console.log(err)});
  }
  if(!hospitalList){
    return null;
  }
    return (
      <View style={{padding:20}}>
        
        <HeaderPage title={param?.category}/>
        <HospitalDoctorTab activeTab={(value)=>setactiveTab(value)}/>
        {!hospitalList?.length?<ActivityIndicator size={'large'} color={Colors.PRIMARY} style={{marginTop:'50%'}}/>: 
        activeTab=='Hospital'?
        <HospitalListBig hospitalList={hospitalList}/>:<Text>doctor list</Text>}
        
       
      </View>
    )
  
}

const styles = StyleSheet.create({})
