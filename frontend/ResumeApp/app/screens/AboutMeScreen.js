import React from 'react';
import {View, Text, Button } from 'react-native';

function AboutMeScreen({navigation, route}) {
  const { age } = route.params ? route.params : 20;  // any route parameters passed through
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Saleh</Text>
      <Text>At Age: {JSON.stringify(age)}</Text>
      {/* <Button 
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      /> */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}
export default AboutMeScreen;
