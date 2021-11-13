import React from "react";

import {View , Text, StyleSheet, Dimensions} from "react-native";
const { height, width } = Dimensions.get("window")

class App extends React.Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.txtCtr} >Target Sum....</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#a0f",
        flex : 1,
    },
    txtCtr: {
        color : "yellow",
        fontSize: 20,
        margin: 0.1 * height,
        marginLeft: 0.1 * width,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10
    }

})
export default App;