import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';

export default function MapScreen() {
    return (
        <SafeAreaView style={tw`bg-white p-10 `}>
            <View>
                <Text>MapScreen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})