import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import SignInWithOAuth from './components/SignInWithOAuth'
import Colors from '../shared/Colors'


export default class Login extends Component {
  render() {
    return (
     <ScrollView> 
       <View style={{alignItems:'center',backgroundColor:'#f4f6f6'}}>
     
     <Image 
     style={styles.img}
       source={
           require('../assets/images/health1.jpg')
         }
     />
   <View style={{ backgroundColor:Colors.white,padding:25,height:Dimensions.get('screen').height-400, alignItems:'center',marginTop:-50,elevation:2,borderTopLeftRadius:20,borderTopRightRadius:20}}>
   <Text style={styles.heading}>Your Ultimate Doctor</Text>
    <Text style={styles.heading}>Appointement Booking App</Text>
    <Text style={{textAlign:'center',marginTop:20,marginBottom:50}}>Book Appointements Effortlessly and  manage your health journey</Text>
    <SignInWithOAuth/>
   </View>
     
     </View>
     </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  img:{
    width:300,
    height:500,
    resizeMode:'stretch',
    marginTop:30,
    borderWidth:6,
    borderColor:'#000',
    borderRadius:20
  
  },
  heading:{
    fontSize:25,fontWeight:'bold',textAlign:'center'
  }
})

