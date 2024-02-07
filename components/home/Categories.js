import React, { Component,useState,useEffect } from 'react'
import { Text, StyleSheet, View ,FlatList,Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import GlobalAPI from '../../services/GlobalAPI';
import Colors from '../../shared/Colors';
import SubHeading from './SubHeading';

export default function Categories (){
  const [categoryList,setcategorylList]=useState();

  const getCategory=()=>{
   
    GlobalAPI.getCategory().then(resp=>{
     console.log('getting data');
           console.log(resp.data.data);
           console.log('sussess categories!!');
           setcategorylList(resp.data.data);
        
          
    }).catch(err=>{console.log(err)});
   }
  
  useEffect(()=>{
    getCategory();
    console.log('new list contents');
    console.log(categoryList);
    console.log('useeffect');
  },[
    
  ])
  if(!categoryList){
    return null;
  }
 const navigation=useNavigation();
    return (
      <View style={{marginTop:10}}>
        <SubHeading name={"Doctor speciality"}/>
        <FlatList 
        numColumns={4}
        columnWrapperStyle={{
          flex:1,
          justifyContent:'space-between'
        }}
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      data={categoryList}
      style={{marginTop:5}}
      renderItem={({item,index})=>index<4&&
       <TouchableOpacity style={{marginBottom:15}} onPress={()=>navigation.navigate('hospital-doctor-list-screen',{category:item.attributes.name})}>
         <View style={{backgroundColor:Colors.SECONDARY,borderRadius:99,padding:15,justifyContent:'center',alignItems:'center'}}>
         <Image style={
      {width:30,height:30,borderRadius:99}
       }
       source={{uri:item.attributes.icon.data.attributes.url} }
       />
       
       {/* <Text>{item.data}</Text> */}
     </View>
     <Text>{item.attributes.name}</Text>
       </TouchableOpacity>
      }
      />
     
      </View>
    )
  
}

const styles = StyleSheet.create({})
