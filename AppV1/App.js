import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';
import ProductScreen from './src/screens/ProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScreen from './src/screens/TableScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={() => <BottomNavigation />}>
          <Tab.Screen name="MESAS" component={TableScreen} 
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'MESAS'
            }}/>

          <Tab.Screen name="PRODUTOS" component={ProductScreen} 
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'PRODUTOS'
          }}/>
          
          <Tab.Screen name="PEDIDOS" component={OrdersScreen} 
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'PEDIDOS'
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


