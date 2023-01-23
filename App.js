import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 


import UserScreen from './screen/UserScreen';
import WelcomeScreen from './screen/WelcomeScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle:{ backgroundColor:'purple'},
      headerTintColor:'white'
    }}>
     <Drawer.Screen name='WelcomeScreen' component={WelcomeScreen}
     options={{drawerLabel:'Welcome Screen',
     drawerIcon: ({color,size}) => (<FontAwesome5 name="home" size={24} color="black" />)}}/>
      <Drawer.Screen name='UserScreen' component={UserScreen}
      options={{
        drawerLabel:'User Screen',
      drawerIcon: ({color,size}) => (<FontAwesome5 name="user" size={24} color="black" />)}}
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
