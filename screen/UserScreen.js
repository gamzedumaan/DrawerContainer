import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

function UserScreen({navigation}) {
  function OpenDrawe(){
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Button title='Gamze' onPress={OpenDrawe}/>
    </View>
  )
}

export default UserScreen;
const styles = StyleSheet.create({})