import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';
import ProductScreen from './src/screens/ProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScreen from './src/screens/TableScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MessageProvider } from './src/contexts/MessageContext';
import { CartProvider } from './src/contexts/CartContext';
import { OrdersProvider } from './src/contexts/OrdersContext';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShoppingCart from './src/components/shoppingCart/ShoppingCart';

const Tab = createBottomTabNavigator()
export default function App() {



  return (
   <MessageProvider>
      <CartProvider>
        <OrdersProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <Tab.Navigator tabBar={() => <BottomNavigation />}
                screenOptions={{
                  headerTitleAlign: 'center',
                  headerRight: () => <ShoppingCart/>
                }}
              >
                <Tab.Screen name="MESAS" component={TableScreen} 
                  options={{
                    headerTitle: 'MESAS'
                  }}/>

                <Tab.Screen name="PRODUTOS" component={ProductScreen} 
                options={{
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
        </OrdersProvider>
      </CartProvider>
   </MessageProvider>
  );
}


