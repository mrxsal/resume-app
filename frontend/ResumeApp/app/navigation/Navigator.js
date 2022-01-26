import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainDrawer from './MainDrawer'
import CustomHeader from './headers/CustomHeader';
import HomeScreen from '../screens/HomeScreen';
import AboutMeScreen from '../screens/AboutMeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            header: (props) => <CustomHeader {...props}/>,
            animationEnabled: false,
          }}
      >
        <Stack.Screen 
            name="MainDrawer"
            component={MainDrawer}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Saleh Rabbaniy'}}
        />
        <Stack.Screen
          name="AboutMe"
          component={AboutMeScreen}
          options={{title: 'About Saleh'}}
          initialParams={{age: 'initial'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{title: 'initial'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
