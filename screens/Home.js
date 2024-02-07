import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button, ScrollView} from 'react-native'
import { ClerkProvider, SignedOut,useAuth } from "@clerk/clerk-expo";
import { Header } from 'react-native/Libraries/NewAppScreen';
import Headeer from '../components/home/Headeer';
import SearcchBar from '../components/home/SearcchBar';
import Slider from '../components/home/Slider';
import Categories from '../components/home/Categories';
import PrenniumHospitals from '../components/home/PrenniumHospitals';

export default function Home () {
  
    const { isLoaded,signOut } = useAuth();
    return (
      <ScrollView style={styles.container}>
       <Headeer/>
      <SearcchBar setSearchText={(value)=>console.log(value)}/>
      <Slider/>
      <Categories/>
      <PrenniumHospitals/>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
 
       
        marginTop:20,
        padding:20
      },
})
