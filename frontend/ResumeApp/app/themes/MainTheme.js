import { extendTheme, NativeBaseProvider } from 'native-base';
const MainTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#fbe8d0',
      100: '#f8dcb9',
      200: '#f6d0a2',
      300: '#f4c58b',
      400: '#f2b973',
      500: '#f0ad5c',
      600: '#eda145',
      700: '#eb962d',
      800: '#e98a16',
      900: '#d27c14',
      1000: 'ba6e12',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
});
export default MainTheme