import React from 'react';
import { Text, Animated } from 'react-native';

const Camera = ({navigation}) => {

    const onScroll = event => {
            const currentOffset = event.nativeEvent.contentOffset.y;
            if (currentOffset > 0) {
                navigation.setOptions({tabBarVisible: false});
            } else {
                navigation.setOptions({tabBarVisible: true});
            }
       
    }

    return (
        <Animated.ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} onScroll={e => onScroll(e)}>
            <Text>Camera</Text>
        </Animated.ScrollView>
    )
}

export default Camera;
