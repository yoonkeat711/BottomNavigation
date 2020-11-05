import React, { useState } from 'react';
import { Text, ScrollView} from 'react-native';

const Chats = ({navigation}) => {

    const [offset, setOffset] = useState(0);

    //show when scroll down, disappear when scroll up
    const onScroll = event => {
        const currentOffset = event.nativeEvent.contentOffset.y;

        if (currentOffset > offset) {
                navigation.setOptions({tabBarVisible: false});
        } else {
                navigation.setOptions({tabBarVisible: true});
        }

        setOffset(currentOffset);
     
    }

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', height: 1000}} onScroll={e => onScroll(e)} scrollEnabled={true}>
            <Text>Chats</Text>
        </ScrollView>
    )
}

export default Chats;
