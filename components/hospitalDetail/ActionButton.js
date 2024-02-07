import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/Colors';


export default function ActionButton () {
  const actionButtonList=[
    {
        id:1,
        name:'Website',
        icon:'earth'
    },
    {
        id:2,
        name:'Email',
        icon:'chatbubble-ellipses'
    },
    {
        id:3,
        name:'Phone',
        icon:'call'
    },
    {
        id:4,
        name:'Share',
        icon:'share'
    },
    {
        id:5,
        name:'Direction',
        icon:'map'
    }
  ]
    return (
      <View style={{marginTop:15}}>
        <FlatList
        data={actionButtonList}
       columnWrapperStyle={{
        flex:1,justifyContent:'space-between'
       }}
        numColumns={5}
        renderItem={(({item})=>
           <TouchableOpacity style={{
            alignItems:'center'
           }}>
            <View style={{
                backgroundColor:Colors.SECONDARY,padding:13,alignItems:'center',borderRadius:99
            }}>
            <Ionicons name={item.icon} size={25} color={Colors.PRIMARY} />
           
            </View>
            <Text style={{
                fontFamily:'appfont-semi',marginTop:5
            }}>{item.name}</Text> 
           </TouchableOpacity>
            )}
        />
       
      </View>
    )
  
}

const styles = StyleSheet.create({})
