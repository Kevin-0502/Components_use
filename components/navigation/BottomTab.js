import { View, Text } from 'react-native'
import React from 'react'
//importacion de pantallas
import Home from '../screens/Home'
import Details from '../screens/Details'
import Image from '../screens/Image'
import Favorito from '../screens/Fsvorito'
//importacion de navigation bottom tab 
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import de Icons
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomTab() {
    
    const TabBar=createBottomTabNavigator();

    return (
    <NavigationContainer>
        <TabBar.Navigator screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName

                switch(route.name) {
                    case 'Home':
                      iconName = focused ? 'home-sharp' : 'home-outline';
                        break;
                    case 'Details':
                      iconName = focused ? 'aperture-sharp' : 'aperture-outline';
                        break;
                    case 'Image':
                      iconName = focused ? 'easel-sharp' : 'easel-outline';
                        break;
                        case 'Favorito':
                            iconName = focused ? 'bookmarks' : 'bookmarks-outline'
                }
                size= focused ? 35 : 20;
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor:'#900',
              tabBarInactiveTintColor:'lightblue',
              headerShown:false,
              tabBarShowLabel:false,
              
        })}>
            <TabBar.Screen name='Home' component={Home} />
            <TabBar.Screen name='Details' component={Details}/>
            <TabBar.Screen name='Image' component={Image}/>
            <TabBar.Screen name='Favorito' component={Favorito}/>
        </TabBar.Navigator>
    </NavigationContainer>
  )
}