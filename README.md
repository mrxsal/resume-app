# resume-app
App created with React Native showcasing my Resume

node@16.13.2

# Usage
- Clone App
- yarn install
- yarn start
- yarn react-native run-android
- use an emulator from Android Studio

# UI Toolkit
Native Base
- native-base 
- react-native-svg 
- react-native-safe-area-context

# react-navigation
## installation
https://reactnavigation.org/docs/getting-started/
- yarn add @react-navigation/native
- yarn add react-native-screens react-native-safe-area-context
- Skipped pod-install with Cocoapods (for ios)
- Made manual changes to MainActivity file for android fix
- yarn add @react-navigation/native-stack for createNativeStackNavigator

NOTE: Decided to switch from react-navigation/native-stack to regular stack: https://reactnavigation.org/docs/stack-navigator/

- Combination of navigators can be difficult (ex. a drawer and stack navigator together)


## usage
- created a Navigator class which sits in <Main />
- {navigator} prop is included in every [Screen] (ex: function HomeScreen({navigator}))
- navigator provides links to all screens and maintains navigation history

