import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, FlatList, TouchableOpacity} from 'react-native'
import HospitalItem from '../home/HospitalItem'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function HospitalCardItem ({hospital}) {

    return (
      <View style={{borderRadius:10,backgroundColor:Colors.white,marginBottom:5,borderWidth:1,borderColor:Colors.Light_GRAY}}>
       
        
        <Image
        style={{width:'100%',height:140,borderTopLeftRadius:10,borderTopRightRadius:10}}
        // source={{uri:hospital.attributes.image.data.url}}
        source={{uri:hospital.attributes.image.data.attributes.url} }
        
        />
        <View style={{paddingTop:10, padding:5}}>
            <Text style={{fontSize:18,fontFamily:'appfont-semi'}}>
            {hospital.attributes.name}
            </Text>
            <FlatList
            data={hospital.attributes.categories.data}
            horizontal={true}
            renderItem={({item})=>
            <Text style={{marginRight:10,color:Colors.Gray}}>{item.attributes.name}</Text>
            }
            />
             
          
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:Colors.Light_GRAY,marginBottom:5,marginLeft:5,marginRight:5}}> 
        
        </View>
        <View style={{display:'flex',flexDirection:'row', gap:5, alignItems:'center',margin:5} }>
        <Ionicons name="location" size={20} color={Colors.PRIMARY} />
        <Text>{hospital.attributes.adress}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row', gap:5, alignItems:'center', marginTop:4,paddingBottom:8,margin:5} }>
        <Ionicons name="eye" size={18} color={Colors.PRIMARY} />
        <Text>654 Views</Text>
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({})
