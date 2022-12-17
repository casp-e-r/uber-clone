import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import React from 'react'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data:any = [
    {
        id: "1",
        title: 'Get a ride',
        image: '',
        screen: 'MapScreen',
    },
    {
        id: "2",
        title: 'Order food',
        image: '',
        screen: "EatScreen",
    }
]

export default function NavOptions() {
    const navigation:any = useNavigation()
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 py-3 pb-6  bg-gray-200 m-2 w-30`}>
                        <View style={tw`flex flex-row items-center`}>
                            <Text style={tw` text-lg font-semibold`}>{item.title}</Text>
                            <Icon style={tw``} type="antdesign" color="white" name="arrowright" tvParallaxProperties={undefined} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})