import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList'

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator 
      tabBarOptions={{ 
        style: {
          height: 64,
          shadowOpacity: 0,
          elevation: 0,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen 
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel:"Proffys",
          tabBarIcon: ({size, color}) => {
            return(
              <Ionicons name="ios-easel" size={size} color={color}/>
            )
          }
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarLabel:"Favoritos",
          tabBarIcon: ({size, color}) => {
            return(
              <Ionicons name="ios-heart" size={size} color={color}/>
            )
          }
        }}
      />
    </Navigator>  
  )
}

export default StudyTabs;