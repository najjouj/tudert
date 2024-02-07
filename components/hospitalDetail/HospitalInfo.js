import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import SubHeading from '../home/SubHeading';
import { useNavigation } from '@react-navigation/native';

export default function HospitalInfo ({hospital}) {
    const navigation=useNavigation();

    return hospital&&(
      <View style={{ 
        
    }}>
        <ScrollView  style={{backgroundColor:Colors.white,height:'100%'}}>
        <Text style={{fontSize:23,fontFamily:'appfont-semi'}}>  {hospital.attributes.name} </Text>
        <FlatList
            data={hospital.attributes.categories.data}
            horizontal={true}
            renderItem={({item})=>
            <Text style={{marginRight:10,color:Colors.Gray}}> {item.attributes.name} </Text>
            }
            />
             <View style={{borderBottomWidth:1,borderBottomColor:Colors.Light_GRAY,marginBottom:5,marginLeft:5,marginRight:5, marginTop:5}}> 
            
        </View>
        <View style={{display:'flex',flexDirection:'row', gap:5, alignItems:'center',margin:5} }>
        <Ionicons name="location" size={20} color={Colors.PRIMARY} />
        <Text style={{
            fontSize:16,fontFamily:'appfont',color:Colors.Gray
        }}>{hospital.attributes.adress}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row', gap:5, alignItems:'center',margin:5} }>
        <Ionicons name="time" size={20} color={Colors.PRIMARY} />
        <Text style={{
            fontSize:16,fontFamily:'appfont',color:Colors.Gray
        }}>Mon SUN | 11 AM - 8 PM </Text>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:Colors.Light_GRAY,marginBottom:5,marginLeft:5,marginRight:5, marginTop:5}}> 
            
            </View>
            <ActionButton/>
            <View style={{borderBottomWidth:1,borderBottomColor:Colors.Light_GRAY,marginBottom:15,marginLeft:5,marginRight:5, marginTop:10,}}> 
            
            </View>
            <SubHeading name={'About'}/>
            <View>
            <Text>
            {hospital.attributes.description.type}
            </Text>
            </View>
            <TouchableOpacity style={styles.appButton} onPress={()=>navigation.navigate('book-appointment',{hospital:hospital})}>
                <Text style={{
                    color:Colors.white,
                    fontFamily:'appfont-semi',fontSize:17,textAlign:'center'
                }}>
                    Book Appointement
                </Text>
            </TouchableOpacity>
            </ScrollView>
            
      </View>
    )
  
}

const styles = StyleSheet.create({
    appButton:{
        borderRadius:99,
        padding:13,
        backgroundColor:Colors.PRIMARY,
        margin:10,
        left:0,
        right:0,
        marginBottom:10,
        marginTop:10,
        zIndex:20
    }
})
