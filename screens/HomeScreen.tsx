import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native"
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";



const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white p-1 `}>
            <View style={tw`px-3 py-9 `}>
                <Image
                    style={{
                        width: 100, height: 60, resizeMode: 'contain', padding: 5
                    }}
                    source={require('../assets/images/uber-logo.png')} />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})
