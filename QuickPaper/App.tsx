import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageOne from './Components/page1';
import PageTwo from './Components/page2';
//icons
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // 헤더를 숨기는 옵션
      }}
      >
      <Tab.Screen name="Google Scholar" component={PageOne} 
        options={{
          tabBarIcon: () => (
              <AntDesign
                  name="google"
                  size={25}
                  color="darkgray"
              />
          ),
      }}
      />
      <Tab.Screen name="SCISPACE" component={PageTwo} 
        options={{
          tabBarIcon: () => (
              <AntDesign
                  name="search1"
                  size={25}
                  color="darkgray"
              />
          ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}