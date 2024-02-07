import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test1 from './Test1';
import { Ionicons, Entypo,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import Test2 from './Test2';
import Home from './Home';
import Profile from './Profile';
import Appointement from './Appointement';
import HomeNavigation from './navigations/HomeNavigation';
import Explore from './Explore';

const TabNav = createBottomTabNavigator();
export default class Index extends Component {
  render() {
    return (
        <TabNav.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false}}>
          <TabNav.Screen name='Home' component={HomeNavigation} options={{
          tabBarIcon:({color,size}) =>{
          return  <Ionicons name="home" size={size} color= {color} /> }
        }}/>  
         <TabNav.Screen name='Explore' component={Explore} options={{
          tabBarIcon:({color,size}) =>{
          return  <Ionicons name="search" size={size} color= {color} /> }
        }}/>
        <TabNav.Screen name='Appointement' component={Appointement} options={{
          tabBarIcon:({color,size}) =>{
          return  <Ionicons name="calendar-sharp" size={size} color= {color} /> }
        }}/>
        <TabNav.Screen name='Profile' component={Profile} options={{
          tabBarIcon:({color,size})=>{
             return  <FontAwesome name="user-circle" size={size} color= {color} />   
            
          }
        }}/>
      </TabNav.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
