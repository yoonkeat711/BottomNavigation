import React from 'react';
import { Text, ScrollView } from 'react-native';

const Camera = ({ navigation }) => {

    // show tab bar when scroll to top
    const onScroll = event => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        if (currentOffset > 0) {
            navigation.setOptions({ tabBarVisible: false });
        } else {
            navigation.setOptions({ tabBarVisible: true });
        }
    }

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', height: 1000}} onScroll={e => onScroll(e)} scrollEnabled={true}>
            <Text>Camera</Text>
        </ScrollView>
    )
}

export default Camera;
