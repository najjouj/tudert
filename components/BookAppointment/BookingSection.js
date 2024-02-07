import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity ,TextInput} from 'react-native'
import Colors from '../../shared/Colors'
import SubHeading from '../home/SubHeading'
import moment from 'moment'
import {useUser } from '@clerk/clerk-expo';
import GlobalAPI from '../../services/GlobalAPI'



export default function BookingSection({hospital}) {
  const [next7days, setnext7days] = useState([]);
  const [selectedDate, setselectedDate] = useState();
  const [time, settime] = useState([]);
  const [selectedTime, setselectedTime] = useState();
  const [note, setnote] = useState();
  const {isLoaded,isSignedIn,user}=useUser();
  

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days');
      nextSevenDays.push(
        {
          day: date.add(i, 'days'),
          date: date.format('ddd'), // tuesday , monday
          formattedDate: date.format('Do MMM') //4th october
        }
      )
    }
    //console.log(nextSevenDays);
    setnext7days(nextSevenDays);
  }
  useEffect(() => {
    getDays();
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push(
        {
          time: i + ' :00 AM'
        }
      )
      timeList.push(
        {
          time: i + ' :30 AM'
        }
      )

    }
    for (let i = 1; i <= 6; i++) {
      timeList.push(
        {
          time: i + ' :00 PM'
        }
      )
      timeList.push(
        {
          time: i + ' :30 PM'
        }
      )

    }
   // console.log(timeList);
    settime(timeList);
  }
  useEffect(() => {
    getTime();
  }, []);
  const bookappointment=()=>{
   
    const data={
      "data":{
        "username":user.fullName,
        "email":user.primaryEmailAddress.emailAddress,
        "date":selectedDate,
        "time":selectedTime,
        "hospital":hospital.id,
        "note":note
      }
    }
    
    console.log('preparing data');
    console.log(data);
    GlobalAPI.bookappointment(data).then((res)=>console.log('sucessssssssssss'));
   console.log('afteeeeeeeeeeeeeeeeer');
  }
  // useEffect(()=>{
  //   bookappointment();
  // },[])

  return (
    <View>
      <Text style={{
        fontSize: 18,
        color: Colors.Gray
      }}> Book Appointement </Text>
      <SubHeading name={'Day'} seeAll={false} />
      <FlatList
        data={next7days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>
          <TouchableOpacity style={(selectedDate == item.date) ? styles.selecteddayButton : styles.dayButton} onPress={() => setselectedDate(item.date)}>
            <Text style={[{
              fontFamily: 'appfont',

            }, (selectedDate == item.date) ? { color: Colors.white } : null]}>
              {item.date}
            </Text>
            <Text style={[{
              fontFamily: 'appfont-semi', fontSize: 16,

            }, selectedDate == item.date ? { color: Colors.white } : null]}>
              {item.formattedDate}
            </Text>
          </TouchableOpacity>
        }
      />
      <SubHeading name={'Time'} seeAll={false} />
      <FlatList
        data={time}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>
          <TouchableOpacity style={[(selectedTime == item.time) ? styles.selecteddayButton : styles.dayButton, { paddingVertical: 16 }]} onPress={() => setselectedTime(item.time)}>

            <Text style={[{
              fontFamily: 'appfont-semi', fontSize: 16,

            }, selectedTime == item.time ? { color: Colors.white } : null]}>
              {item.time}
            </Text>
          </TouchableOpacity>
        }
      />
      <SubHeading name={'Note'} seeAll={false} />
      <TextInput
      onChangeText={(value)=>setnote(value)}
      numberOfLines={3}
      placeholder='Write notes here'
      style={{
        textAlignVertical:'top',
        backgroundColor:Colors.Light_GRAY,
        padding:10,
        borderRadius:10,
        borderColor:Colors.SECONDARY,
        borderWidth:1
      }}
      />
        <TouchableOpacity style={styles.appButton} onPress={()=>bookappointment()}>
                <Text style={{
                    color:Colors.white,
                    fontFamily:'appfont-semi',fontSize:17,textAlign:'center'
                }}>
                    Make Appointement
                </Text>
            </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5, paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    borderColor: Colors.Gray
  },
  selecteddayButton: {

    borderRadius: 99,
    padding: 5, paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: Colors.PRIMARY
  },
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
