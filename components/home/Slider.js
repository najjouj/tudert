import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View,FlatList, Dimensions,Image } from 'react-native'
import GlobalAPI from '../../services/GlobalAPI'

export default function Slider () {
  const [sliderList,setsliderList]=useState();

    // const sliders=[
    //   {
    //     id:1,
    //     name:'Slider1',
    //     imageUrl:'https://www.worldbank.org/content/dam/photos/780x439/2023/sep/Global-Monitoring-Report-2023.png'
    //   },
    //   {
    //     id:2,
    //     name:'Slider2',
    //     imageUrl:'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22068_1643642026923165.jpg'
    //   }
    // ]
    // useEffect((()=>{
    //  // getSlider();
    //  console.log('hello');

    // },[]))
    const getSlider=()=>{
      GlobalAPI.getSlider().then(resp=>{
       console.log('getting data');
             console.log(resp.data.data);
             console.log('sussess sliders!!');
             setsliderList(resp.data.data);
          
            
      }).catch(err=>{console.log(err)});
     }
    
    useEffect(()=>{
      getSlider();
      console.log('new list contents');
      console.log(sliderList);
      console.log('useeffect');
    },[
      
    ])
 

    return (
      <View style={{marginTop:10}}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={sliderList}
      renderItem={({item})=>
     <View>
         <Image style={
      {width:Dimensions.get('screen').width * .85,height:170,borderRadius:10,margin:5}
       }
       source={{uri:item.attributes.image.data.attributes.url} }
       />
       {/* <Text>{item.data}</Text> */}
     </View>
      }
      />
        
   
      </View>
    )
  
}

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get('screen').width * .9, hight:170

    }
})
