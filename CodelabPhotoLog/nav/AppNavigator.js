import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import List from '../Pages/List';
import View from '../Pages/View';
import Form from '../Pages/Form';

const Stack = createStackNavigator();

function AppNavigator(props){

    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="View" component={View} />
      <Stack.Screen name="Form" component={Form} />
     </Stack.Navigator>



}

export default AppNavigator;

