import React from 'react';
import {View, Text, Button } from 'react-native';

function ProfileScreen({navigation, route}) {
  const { name } = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Profile</Text>
    </View>
  );
}
export default ProfileScreen;
