import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput,TouchableHighlight } from "react-native";

const Otp = ({navigation}) =>{
    
        return(
            <View style = {styles.container}>
                <Image style = {styles.inmakesLogo}
                    source={require('../screen/logo.webp')}></Image>
                <Image 
                    style = {styles.securityLogo}
                    source={require('../screen/security.png')}></Image>
                <Text style = {styles.VerifiText}>Verification code</Text>
                <Text style = {styles.pleaseText}>Please type the verification code send to</Text>
                <TextInput style = {styles.mobNoText}>+91 8137875854</TextInput>
                <View style = {styles.boxView}>
                    <View style = {styles.otpView}>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>
                        <TextInput style = {styles.otpInputBox}
                        keyboardType="numeric"
                        maxLength={1}></TextInput>

                    </View>
                    <TouchableHighlight style = {styles.buttonBox}
                    underlayColor={'#3cc260'}
                    onPress={()=>navigation.navigate('Studetails')}>
                        <Text style = {styles.buttonText}>Resend OTP</Text>
                        </TouchableHighlight>
                        <Text style = {styles.resendText}>Resend after 28s</Text>
                        <View style = {styles.contactView}>
                        <Image source={require('../screen/call.png')}
                        style = {styles.callLogo}></Image>
                        <Text style = {styles.contactText}>Contact Us</Text>
                        </View>
                </View>
            </View>
        )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },

    inmakesLogo: {
        height: 50,
        width: 200,
        marginTop: 40
    },

    securityLogo: {
        height: 150,
        width: 150,
        marginTop: 100
    },

    VerifiText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0d2f4f',
        marginTop: '25%',
    },

    pleaseText: {
        fontSize: 16,
        marginTop: 5,
    },

    mobNoText: {
        fontSize: 16,
        marginTop: 20,
        color: '#0d2f4f'
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

    otpView: {
        flexDirection: 'row'
    },

    otpInputBox: {
        height: 60,
        width: 60,
        backgroundColor: '#1b3e5e',
        borderRadius: 10,
        marginTop: 30, 
        marginLeft: 5,
        opacity: 10,
        borderWidth: 1,
        borderColor: '#1c3852',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
        
    },

    buttonBox: {
        height: 60,
        width: '90%',
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
    },
    resendText: {
        fontSize: 12,
        color: '#8b97a3',
        marginTop: 5
    },
    callLogo: {
        height: 25,
        width: 25
    },
    contactText: {
        fontSize: 16,
        color: '#15ed4f'
    },

    contactView: {
        flexDirection: 'row',
        marginTop: '8%'
    }

})

export default Otp;