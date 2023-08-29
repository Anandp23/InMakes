import React,{Component} from "react";
import {View,Text,StyleSheet} from 'react-native'   

export default class Notification extends Component{
    render(){
        return(
            <View>
                <Text style = {{justifyContent: 'center', alignItems: 'center'}}>
                    Welcome to Notification
                </Text>
            </View>
        )
    }
}