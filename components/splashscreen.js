import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.textStyles}>
              Splash Screen
            </Text>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    textStyles:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      },
});

