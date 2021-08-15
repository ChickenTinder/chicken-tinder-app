import AppLoading from 'expo-app-loading';
import React from 'react';

// Colors
import { Colors } from '../components/styles';
const { sunglow, vividBurgundy, orangeRed, cultured } = Colors;

// Fonts
import { useFonts, Asap_600SemiBold } from '@expo-google-fonts/asap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faKey, faFileSignature, faCog } from '@fortawesome/free-solid-svg-icons'

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
import Login from '../screens/Login'
import Settings from '../screens/Settings';
import Signup from '../screens/Signup';

const Tab = createBottomTabNavigator();

const RootTabs = () => {
  let [fontsLoaded] = useFonts({
    Asap_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName;

                switch (route.name) {
                  case 'Login':
                    iconName = faKey;
                    break;
                  case 'Signup':
                    iconName = faFileSignature;
                    break;
                  case 'Settings':
                    iconName = faCog;
                    break;
                  default:
                    iconName = faKey;
                    break;
                }
                return <FontAwesomeIcon icon={iconName} size={30} color={color} />
              },
              tabBarActiveTintColor: vividBurgundy,
              tabBarInactiveTintColor: orangeRed,
              headerTransparent: true,
              headerTitle: '',
              tabBarStyle: {
                backgroundColor: sunglow,
              },
              tabBarLabelStyle: {
                fontFamily: "Asap_600SemiBold",
                fontSize: 14,
              }
            })
          }
        >
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Signup' component={Signup} />
          <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
      </NavigationContainer >
    )
  }
}

export default RootTabs;
