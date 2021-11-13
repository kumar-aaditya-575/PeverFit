import React from "react";

import {
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Text, Icon, Image, Button } from 'react-native-elements';
const { height, width } = Dimensions.get("window")

class App extends React.Component {
    render(){
        return (
            
                < View style = { styles.container } >
                    <View style={styles.headerContainer}>
                        <Icon name="md-fitness" size={80} type="ionicon" />
                        <Text h4>Welcome to Fitness Master</Text>
                        <Text h5 style={{ textAlign: 'center' }}>
                            The best App for track Fitness workout and Meal planner
                        </Text>
                    </View>
                </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F6FA', height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerContainer: {
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
});
export default App;


