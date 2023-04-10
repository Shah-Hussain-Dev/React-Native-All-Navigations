import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image source={{uri:"https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"}} style={{height:100,width:100, borderRadius:50}}/>
    <Text style={{fontSize:20,fontWeight:"800"}}>Shah Husain</Text>
    <Text style={{fontSize:13,fontWeight:"400"}}>Full Stack Developer</Text>
   </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})