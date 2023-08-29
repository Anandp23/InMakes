import React, {Component} from "react";
import {View, Text, StyleSheet, Image,TextInput,TouchableHighlight} from 'react-native'

const Register = ({navigation}) =>{
        return(
            <View style = {styles.container}>
                <Image 
                style = {styles.inmakesLogo}
                source={require('../screen/logo.webp')}>
                </Image>
                <Text style ={styles.textEnter}>Enter your mobile number</Text>
                <Text style={styles.otpText}>We will send you an OTP to verify</Text>
                <View style = {styles.boxView}>
                    <View style = {styles.mobView}>
                        <TextInput style = {styles.codeInputBox}>
                            <Text style = {styles.codeText}>+91</Text>
                        </TextInput>
                        <TextInput style = {styles.numberInputBox} 
                            placeholder="Mobile number" 
                            placeholderTextColor='#92a0a8' ></TextInput>
                    </View>
                    
                        <TouchableHighlight style = {styles.buttonBox}
                            underlayColor={'#3cc260'}
                            onPress={() => navigation.navigate('Otp')}>
                            <Text style = {styles.buttonText}>Continue</Text>
                        </TouchableHighlight>
                </View>
           </View>
        )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginTop: '60%'
    },

    inmakesLogo: {
        height: 65,
        width: 250,
     
    },

    textEnter: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#0d2f4f',
        marginTop: '65%'
        
    },

    otpText: {
        fontSize: 16,
        marginTop: 5
    },

    boxView: {
        width: '100%',
        height: '40%',
        backgroundColor: '#0d2f4f',
        marginTop: 30,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        
    },

    mobView: {
        height: '30%',
        width: '80%',
        flexDirection: 'row',
        
    },

    codeInputBox: {
        height: 60,
        width: 60,
        backgroundColor: '#1b3e5e',
        borderRadius: 10,
        marginTop: 30, 
        opacity: 10,
        borderWidth: 1,
        borderColor: '#1c3852',
        textAlign: 'center'
        
    },

    codeText: {
        fontSize: 14,
        color: '#fff',
        
    },

    numberInputBox: {
        height: 60,
        width: '80%',
        opacity: 10,
        backgroundColor: '#1b3e5e',
        borderRadius: 10,
        marginTop: 30,       
        borderWidth: 2,
        borderColor: '#1c3852',    
        color: 'white',
        marginLeft: 10
        
    },
    numberText: {
        fontSize: 10,
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBox: {
        height: 60,
        width: '80%',
        backgroundColor: '#15ed4f',
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    }

})

export default Register;