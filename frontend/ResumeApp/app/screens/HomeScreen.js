import React from 'react';
import {View, StyleSheet } from 'react-native';
import {
    ScrollView,
    VStack,
    Text, 
    Button,
    Center,
    useTheme,
    Heading,
    NativeBaseProvider,
  } from "native-base"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    margin: 20,
  }

})

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} color="primary.900">Home Screen</Text>
      <Button 
        title="Go to About Saleh"
        onPress={() => navigation.navigate('AboutMe')}
        backgroundColor='primary.800'
        style={styles.button}> Check out this Booking Journey</Button>
      {/* <Button 
        title="My Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  );
}
export default HomeScreen;
