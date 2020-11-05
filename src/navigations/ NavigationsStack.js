import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Calls from '../screens/Calls';
import Camera from '../screens/Camera';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import Status from '../screens/Status';

import StatusIcon from './../assets/status.png';
import CameraIcon from './../assets/camera.png';
import ChatIcon from './../assets/chat.png';
import CallIcon from './../assets/call.png';
import SettingsIcon from './../assets/settings.png';

const THEME_COLOR = '#3333FF';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ icon, focused, customBadge }) => {
    return (
        <View style={{width: 40}}>
            {customBadge && <View style={{ position: 'absolute', top: 8, right: 0, backgroundColor: THEME_COLOR, height: 8, width: 8, borderRadius: 4 }} />}
            <Image
                source={icon}
                resizeMode={'contain'}
                style={{ height: 30, width: 30, tintColor: focused ? THEME_COLOR : '#222'}}
            />
        </View>
    )
}

const BottomTab = () => {
    const [chatBadgeNumber, setChatBadgeNumber] = useState(3);
    const [settingsBadgeNumber, setSettingsBadgeNumber] = useState(1);

    const onDismissChatBadgeNumber = (e) => {
        setChatBadgeNumber(null);
    }

    const onDismissSettingsBadgeNumber = () => {
        setSettingsBadgeNumber(null);
    }

    return (
        <Tab.Navigator
            initialRouteName={"Status"}
            tabBarOptions={{ activeTintColor: THEME_COLOR }}
            activeColor={THEME_COLOR}
            barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name={"Status"}
                component={Status}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon focused={focused} icon={StatusIcon} customBadge={true} />,
                }}
            />
            <Tab.Screen
                name={"Calls"}
                component={Calls}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon focused={focused} icon={CallIcon} />,
                }}
            />
            <Tab.Screen
                name={"Camera"}
                component={Camera}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon focused={focused} icon={CameraIcon} />
                }}
            />
            <Tab.Screen
                name={"Chats"}
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon focused={focused} icon={ChatIcon} />,
                    tabBarBadge: chatBadgeNumber,
                }}
                listeners={() => ({
                    tabPress: () => onDismissChatBadgeNumber()
                })}
            />
            <Tab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon focused={focused} icon={SettingsIcon} />,
                    tabBarBadge: settingsBadgeNumber,
                }}
                listeners={() => ({
                    tabPress: () => onDismissSettingsBadgeNumber()
                })}
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
