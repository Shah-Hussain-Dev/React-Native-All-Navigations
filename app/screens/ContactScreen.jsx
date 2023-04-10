import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ContactScreen</Text>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:"blue"
},
text:{
  fontSize:40,
  color:"white",
  fontWeight:"800",
}
})