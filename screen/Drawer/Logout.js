import React,{Component} from "react";
import {View,Text,StyleSheet} from 'react-native'   

export default class Logout extends Component{
    render(){
        return(
            <View>
                <Text style = {{justifyContent: 'center', alignItems: 'center'}}>
                    Welcome to Logout
                </Text>
            </View>
        )
    }
}