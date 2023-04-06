import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import ReceiptScreen from '../screens/receiptScreen';
import {RootStackParamList} from './types';
import AddReceiptScreen from '../screens/addReceiptScreen';
import React from 'react';

const Stack = createStackNavigator<RootStackParamList>();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen
        name={'Receipts'}
        component={ReceiptScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name={'AddReceipt'} component={AddReceiptScreen} />
    </Stack.Navigator>
  );
}
