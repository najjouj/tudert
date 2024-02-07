import React, { Component,useState,useEffect } from 'react'
import { Text, StyleSheet, View,FlatList,Image } from 'react-native'
import SubHeading from './SubHeading'
import GlobalAPI from '../../services/GlobalAPI';
import HospitalItem from './HospitalItem';

export default function PrenniumHospitals () {


    const [preniumhospitalList,setpreniumhospitallList]=useState();

    const getPreniumHospital=()=>{
    
      GlobalAPI.getPreniumHospitals().then(resp=>{
       console.log('getting data');
             console.log(resp.data.data);
             console.log('sussess categories!!');
             setpreniumhospitallList(resp.data.data);
          
            
      }).catch(err=>{console.log(err)});
     }
    
    useEffect(()=>{
      getPreniumHospital();
      console.log('new list contents');
      console.log(preniumhospitalList);
      console.log('useeffect');
    },[
      
    ])
    if(!preniumhospitalList){
        return null;
      }
    return (
      <View>
        
        <SubHeading name={"Our Prenium Hospitals"}/>
        <FlatList 
        // // numColumns={4}
        // columnWrapperStyle={{
        //   flex:1,
        //   justifyContent:'space-between'
        // }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={preniumhospitalList}
      style={{marginTop:5}}
      renderItem={({item,index})=>
       <HospitalItem hospital={item}/>
      }
      />
      </View>
    )
  
}

const styles = StyleSheet.create({})
