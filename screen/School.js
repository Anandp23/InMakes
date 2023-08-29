import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput,TouchableHighlight } from "react-native";

const School = ({navigation}) =>{   
        return(
            <View style = {styles.container}>
                <Image style = {styles.inmakesLogo}
                    source={require('../screen/logo.webp')}></Image>
                <Image 
                    style = {styles.securityLogo}
                    source={require('../screen/school.png')}></Image>
                    <Text style = {styles.VerifiText}>Select your school board</Text>
                
                <View style = {styles.boxView}>
                    <View style = {styles.inputView}>
                        <TextInput style = {styles.InputBox}
                        placeholder="Select board" placeholderTextColor='grey'
                        ></TextInput>
                        <TextInput style = {styles.InputBox}
                        placeholder="Select class" placeholderTextColor='grey'
                        
                        ></TextInput>

                        <TouchableHighlight style = {styles.buttonBox}
                        underlayColor={'#3cc260'}
                         onPress={()=>navigation.navigate('Apptitle')}>
                        <Text style = {styles.buttonText}>Continue</Text>
                        </TouchableHighlight>
                    </View>                        
                </View>
            </View>
        )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
        marginTop: '20%'
    },

    VerifiText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0d2f4f',
        marginTop: '40%',
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
        marginTop: '10%',
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        
    },

    InputBox: {
        height: 70,
        width: '80%',
        backgroundColor: '#1b3e5e',
        borderRadius: 10,
        marginTop: 15,         
        opacity: 10,
        borderWidth: 1,
        borderColor: '#1c3852',
        textAlign: 'left',
        color: 'white',
        fontSize: 16,
        padding: 20,       
        
    },

    inputView : {
        height: 40,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },

    buttonBox: {
        height: 60,
        width: '80%',
        backgroundColor: '#15ed4f',
        borderRadius: 5,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    }   

})

export default School;

