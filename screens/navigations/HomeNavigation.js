import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Home from '../Home';
import HospitalDoctorsListScreen from '../HospitalDoctorsListScreen';
import HospitalDetails from '../HospitalDetails';
import BookAppointement from '../BookAppointement';


const Stack=createNativeStackNavigator();
export default function HomeNavigation () {

    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='hospital-doctor-list-screen' component={HospitalDoctorsListScreen}/>
        <Stack.Screen name='hospital-detail' component={HospitalDetails}/>
        <Stack.Screen name='book-appointment' component={BookAppointement} />
        
      </Stack.Navigator>
    )
  
}

const styles = StyleSheet.create({})
