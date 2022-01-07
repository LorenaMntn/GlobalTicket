import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets';
import Contact from './Contact';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="screen">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}>
            {props => <Home {...props} username="Sports Fan" />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Contact Us',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
