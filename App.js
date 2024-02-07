import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test1 from './screens/Test1';
import { Ionicons, Entypo,MaterialCommunityIcons} from '@expo/vector-icons';
import Test2 from './screens/Test2';
import Index from './screens/Index';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './screens/components/SignInWithOAuth';
import Login from './screens/Login';
import { useFonts } from 'expo-font';

const TabNav = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return null
  }
  return (
  <NavigationContainer>
    <ClerkProvider publishableKey='pk_test_bmV1dHJhbC1zbmFpbC00Ni5jbGVyay5hY2NvdW50cy5kZXYk'>
      <StatusBar hidden/>
        <SignedIn>
          <Index/>
        </SignedIn>
        <SignedOut>
         <Login/>
        </SignedOut>
   
    </ClerkProvider>
  
  </NavigationContainer>
  );
}<SignInWithOAuth/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5b041',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar:{
    backgroundColor:'#f5b041'
    
  }
});
