import React, { useState, useRef } from 'react';
import { Image, View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
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

const TabBarIcon = ({ icon, focused, customBadge, navigation, route }) => {

    const iconAnimatedValue = useRef(new Animated.Value(0)).current;

    const moveUpwards = () => {

        navigation.navigate(route.name);

        Animated.timing(iconAnimatedValue, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }

    const focusedYVal = iconAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 5],
    });

    return (
        <TouchableOpacity onPress={moveUpwards} style={focused ? { transform: [{ translateY: focusedYVal }] } : { top: 5 }}>
            {customBadge && <View style={styles.customBadge} />}
            <Image
                source={icon}
                resizeMode={'contain'}
                style={[styles.icon, { tintColor: focused ? THEME_COLOR : 'grey' }]}
            />
        </TouchableOpacity>
    )
}

const BottomTab = () => {
    const [chatBadgeNumber, setChatBadgeNumber] = useState(3);
    const [settingsBadgeNumber, setSettingsBadgeNumber] = useState(1);

    const onDismissChatBadgeNumber = () => {
        setChatBadgeNumber(null);
    }

    const onDismissSettingsBadgeNumber = () => {
        setSettingsBadgeNumber(null);
    }

    return (
        <Tab.Navigator
            initialRouteName={"Status"}
            tabBarOptions={{ activeTintColor: THEME_COLOR }}
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    let customBadge = false;
                    if (route.name === 'Status') {
                        icon = StatusIcon;
                        customBadge = true;
                    } else if (route.name === 'Calls') {
                        icon = CallIcon;
                    } else if (route.name === 'Camera') {
                        icon = CameraIcon;
                    } else if (route.name === 'Chats') {
                        icon = ChatIcon;
                    } else {
                        icon = SettingsIcon;
                    }

                    return <TabBarIcon focused={focused} icon={icon} customBadge={customBadge} navigation={navigation} route={route} />
                }
            })}
        >
            <Tab.Screen
                name={"Status"}
                component={Status}
            />
            <Tab.Screen
                name={"Calls"}
                component={Calls}
            />
            <Tab.Screen
                name={"Camera"}
                component={Camera}
            />
            <Tab.Screen
                name={"Chats"}
                component={Chats}
                options={{
                    tabBarBadge: chatBadgeNumber,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => onDismissChatBadgeNumber()
                })}
            />
            <Tab.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarBadge: settingsBadgeNumber,
                }}
                listeners={({ navigation, route }) => ({
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


const styles = StyleSheet.create({
    customBadge: {
        position: 'absolute',
        top: 8,
        right: 0,
        backgroundColor: THEME_COLOR,
        height: 8,
        width: 8,
        borderRadius: 4,
    },
    icon: {
        width: 30,
        height: 30,
    }
})
export default NavigationsStack;
