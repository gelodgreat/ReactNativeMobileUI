import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HOME_SCREEN, OTHER_SCREEN} from '../common/screens_url';
import DetailsContainer from '../screens/Details/Details.container';
import HomeContainer from '../screens/Home/Home.container';

const Stack = createNativeStackNavigator();

const DefaultStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={HOME_SCREEN}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeContainer}
        options={{headerTitle: 'Waifus'}}
      />
      <Stack.Screen
        name={OTHER_SCREEN}
        component={DetailsContainer}
        options={{headerTitle: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default DefaultStack;
