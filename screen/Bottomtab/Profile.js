import React, {Component} from 'react';

import { View, Text, StyleSheet, TouchableHighlight, Image,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Profile extends Component{
    render(){
        return(
            
                <View style = {styles.container}>
                    
                <View style = {styles.backgroundView1}>
                        <Text style = {styles.pagenameText}>Profile</Text>
                        <MaterialCommunityIcons name="bell-outline" color={'white'} size={24} style = {styles.notiIcon}></MaterialCommunityIcons>
                        <TouchableHighlight style = {styles.drawerButton}>
                            <Image source={require('../images/grid.png')} style = {styles.drawerImage}></Image>
                        </TouchableHighlight>
                </View>
                    <View style = {styles.detailsView}>
                        <View style = {styles.userDetailsView}>
                            <View style = {styles.roundimageView}>
                                <Image source={require('../images/profile.webp')} style={{height:55,width:55,borderRadius:27}}></Image>                        
                            </View>
                            <Text style={{marginTop: 30, fontSize: 16, color: 'black', fontWeight: 'bold'}}>James carter</Text>
                            <Text style={{marginTop:50, marginLeft: -85}}>ID: 123456789</Text>
                        </View>
                        <Text style = {{fontSize: 16, color: 'black', fontWeight: 'bold', margin: 20, marginLeft:'-65%'}}>Personal Info</Text>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}> Account Name</Text>
                            <Text style = {styles.textRight}>James carter</Text>
                        </View>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}> Email                 </Text>
                            <Text style = {styles.textRight}>jamescarter@gmail.com</Text>
                        </View>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}> Mobile Number</Text>
                            <Text style = {styles.textRight}>8137875854</Text>
                        </View>
                        <Text style = {{fontSize: 16, color: 'black', fontWeight: 'bold', margin: 20, marginLeft:'-65%'}}>Personal Info</Text>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}> Center               </Text>
                            <Text style = {styles.textRight}>Inmakes Edu</Text>
                        </View>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}> Courses            </Text>
                            <Text style = {styles.textRight}>Plus Two Science</Text>
                        </View>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}>Payment Status</Text>
                            <Text style = {styles.textRight}>Free</Text>
                        </View>
                        <View style = {styles.detailContentView}>
                            <Text style = {styles.leftText}>Expiry Date        </Text>
                            <Text style = {styles.textRight}>Not Applicable</Text>
                        </View>
                        <View style = {styles.buttonBox}
                            underlayColor={'#3cc260'}
                            >
                                <View style = {{backgroundColor:'#3cc260', opacity: 1, margin: 10,padding: 5}}>
                                <MaterialCommunityIcons name='credit-card-outline' size={30} color={'white'} ></MaterialCommunityIcons>
                                </View>
                            <Text style = {styles.buttonText}>Custom Payment</Text>
                            <MaterialCommunityIcons name='chevron-right' size={20} color={'white'} style={{marginLeft: '35%'}} ></MaterialCommunityIcons>
                            </View>
                        <View style = {styles.buttonBox}
                            underlayColor={'#3cc260'}
                            >
                                <View  style = {{backgroundColor:'#3cc260', opacity: 1, margin: 10,padding: 5}}>
                                <MaterialCommunityIcons name='arrow-right-top-bold' size={30} color={'white'} ></MaterialCommunityIcons>
                                </View>
                            <Text style = {styles.buttonText}>Referrals</Text>
                            <MaterialCommunityIcons name='chevron-right' size={20} color={'white'} style={{marginLeft: '50%'}}></MaterialCommunityIcons>
                            </View>
                </View>
                
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
        
    },

    backgroundView1: {
        height: '35%',
        width: '100%',
        backgroundColor: '#0d2f4f',
        
        flexDirection: 'row',
        
    },

    detailsView: {
        height: '80%',
        width: '90%',
        backgroundColor: '#ffffff',
        marginTop: '-50%',
        borderRadius: 10,
        borderLeftWidth: .3,
        borderRightWidth: .3,
        borderBottomWidth: .3,
        alignItems: 'center'
    },

    pagenameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginLeft: '42%'
    },

    notiIcon: {
        marginTop: 30,
        marginLeft: '20%'
   
    },

    drawerButton: {
        height: 35,
        width: 35,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'grey',
        backgroundColor: '#15ed4f',
        marginTop: 26,
        margin: 10
    },

    drawerImage: {
        height: 15,
        width: 15
    },

    roundimageView: {
        height: 60,
        width: 60,
        borderRadius: 40,
        backgroundColor: '#15ed4f',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        
    },

    userDetailsView: {
        width: '100%',
        height: '10%',
        flexDirection: 'row'
    },

    detailContentView: {
        width: '100%',
        height: '7%',
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: .5
    },

    leftText: {
        fontSize: 14,
        margin: 10
    },

    textRight: {
        fontSize: 14,
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    buttonBox: {
        height: 60,
        width: '90%',
        backgroundColor: '#15ed4f',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        
        flexDirection: 'row'
        
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',

    }
})
