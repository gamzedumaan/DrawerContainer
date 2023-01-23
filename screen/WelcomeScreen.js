import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  function OpenUser() {
    navigation.toggleDrawer();

  }
  return (
    <View>
      <Button title='Duman' onPress={OpenUser}/>
    </View>
  )
}

const styles = StyleSheet.create({})