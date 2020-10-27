import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Calls from '../screens/Calls';
import Camera from '../screens/Camera';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import Status from '../screens/Status';
import CameraIcon from './../assets/camera.png';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName={"Status"} tabBarOptions={{ activeTintColor: 'blue' }}>
            <Tab.Screen
                name={"Status"}
                component={Status}
                options={{ tabBarIcon: () => <Image source={CameraIcon} style={{ height: 30, width: 30 }} /> }}
            />
            <Tab.Screen
                name={"Calls"}
                component={Calls}
                options={{ tabBarIcon: () => <Image source={CameraIcon} style={{ height: 30, width: 30 }} />, tabBarBadge: 3 }}
            />
            <Tab.Screen
                name={"Camera"}
                component={Camera}
            />
            <Tab.Screen
                name={"Chats"}
                component={Chats}
            />
            <Tab.Screen
                name={"Settings"}
                component={Settings}
            />
        </Tab.Navigator>
    )
}

const NavigationsStack = () => {

    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    )
}

export default NavigationsStack;
