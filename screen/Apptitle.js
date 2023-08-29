import React,{Component} from "react";
import {View, Text, StyleSheet, ScrollView, Image,  TouchableHighlight,} from 'react-native'

const Apptitle = ({navigation}) =>{
        return(
            <View style = {styles.container}>
                <View style = {styles.scrollContainer}>
                    <ScrollView style = {styles.Scrollviewstyle}
                        horizontal= {true}
                        pagingEnabled>
                        <View style = {styles.imageView}>
                        <Image source={require('../screen/image1.jpg')}
                        style = {styles.imagesize}></Image>
                        </View>  
                        <View style = {styles.imageView}>
                        <Image source={require('../screen/image2.jpg')}
                        style = {styles.imagesize}></Image>
                        </View> 
                  
                        <View style = {styles.imageView}>
                        <Image source={require('../screen/image3.jpg')}
                        style = {styles.imagesize}></Image>
                        </View> 
                    </ScrollView>
             </View>

             <Text style= {styles.titleText}>Inmakes Learning Hub</Text>
             <Text style= {styles.descriText}>Summery about inmakes</Text>
             <TouchableHighlight style = {styles.button}
             underlayColor={'#3cc260'}
             onPress={()=>navigation.navigate('Bottom')}>
                <Image source={require('../screen/arrow.png')}
                style = {styles.iconsize}>

                </Image>
                
             </TouchableHighlight>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    scrollContainer: {
        height: '60%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        
       
        
    },

    // imageView: {
    //     height: 200,
    //     width: 300,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },

    imagesize: {
        height: 500,
        width: 300,
        borderRadius: 10
     
    },

    titleText: {
        fontSize: 24,
        color: 'black',
        marginTop: 40,
        fontWeight: 'bold'
    },

    descriText: {
        fontSize: 16,
        marginTop: 10
    },
    button: {
        width: 75,
        height: 75,
        backgroundColor: '#15ed4f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 80
    },
    iconsize: {
        height: 30,
        width: 30
    }
})

export default Apptitle;