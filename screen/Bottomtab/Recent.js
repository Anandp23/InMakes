
import React, {Component} from 'react';

import { View, Text } from 'react-native';

export default class Recent extends Component{
    render(){
        return(
            <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:28,fontWeight:'bold',color:'black'}}>Recent</Text>
            </View>
        )
    }
}
