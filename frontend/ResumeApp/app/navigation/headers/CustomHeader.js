import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  Image,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from 'native-base';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

const CustomHeader = ({ navigation, route, options, back }) => {
  return (
    <>
    <StatusBar backgroundColor='grey' barStyle="light-content" />
    
    <HStack bg="primary.50" barStyle="dark-content"
      px="1" py="2" justifyContent="space-between" alignItems="center">
        <>
        {navigation.canGoBack() ? 
        <IconButton 
          icon={<Icon size="md" as={<Icons name="arrow-left" />} color="white" />}
          onPress={() => navigation.goBack()}
        /> : 
        null}
        <IconButton icon={<Icon size="md" as={<Icons name='menu' />} color="primary.800" />}
        onPress={() => navigation.openDrawer()} />
        </>
        <Image 
          source={require('../../images/icons/icw-logo-text.png')}
          style={{ height: 40, width: 200 }}
          alt="icowork logo" />
        {/* <Text fontSize="20" color="white"> {options.title} </Text> */}
        <IconButton icon={<Icon size="md" as={<Icons name="user" />} color="primary.800" />} />
    </HStack>
    
    </>
  );
};

export default CustomHeader;
