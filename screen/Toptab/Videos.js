import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight,ScrollView,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Videos = ({navigation}) =>{
    return(
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
                <View style = {styles.card}>  
                                 
                            <Image source={require('../images/class.jpg')} style={{height:230,width:'100%',}}></Image>
                            <TouchableOpacity onPress={()=>navigation.navigate('Videoplay' )}>
                            <Text style = {{fontSize: 20,color: 'black',fontWeight: 'bold',margin: 20}}
                            >
                                Long chapter name can be shown here.</Text></TouchableOpacity>
                            <View style = {{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: 'grey'}}>12 Chapter</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: 'grey'}}>124 hour</Text>
                            </View>   
                            <TouchableHighlight 
                            onPress={()=> navigation.navigate('MyStack')}
                            style={{height:40,width: 100,backgroundColor: '#15ed4f', marginTop:'-50%',marginLeft:'65%',borderRadius:5,justifyContent:'center',alignItems: 'center'}}>
                                <Text style={{color:'white'}}>Biology</Text>
                                </TouchableHighlight>   
                                           
                </View>     

                <View style = {styles.card}>                    
                            <Image source={require('../images/class.jpg')} style={{height:230,width:'100%',}}></Image>
                            <Text style = {{fontSize: 20,color: 'black',fontWeight: 'bold',margin: 20}}
                            onPress={()=>navigation.navigate('Videoplay')}>
                                Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: 'grey'}}>12 Chapter</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: 'grey'}}>124 hour</Text>
                            </View>   
                            <TouchableHighlight style={{height:40,width: 100,backgroundColor: '#15ed4f', marginTop:'-50%',marginLeft:'65%',borderRadius:5,justifyContent:'center',alignItems: 'center'}}>
                                <Text style={{color:'white'}}>Biology</Text>
                                </TouchableHighlight>                 
                </View>   

                <View style = {styles.card}>                    
                            <Image source={require('../images/class.jpg')} style={{height:230,width:'100%',}}></Image>
                            <Text style = {{fontSize: 20,color: 'black',fontWeight: 'bold',margin: 20}}
                            onPress={()=>navigation.navigate('Videoplay')}>
                                Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: 'grey'}}>12 Chapter</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: 'grey'}}>124 hour</Text>
                            </View>   
                            <TouchableHighlight style={{height:40,width: 100,backgroundColor: '#15ed4f', marginTop:'-50%',marginLeft:'65%',borderRadius:5,justifyContent:'center',alignItems: 'center'}}>
                                <Text style={{color:'white'}}>Biology</Text>
                                </TouchableHighlight>                 
                </View>

                <View style = {styles.card}>                    
                            <Image source={require('../images/class.jpg')} style={{height:230,width:'100%',}}></Image>
                            <Text style = {{fontSize: 20,color: 'black',fontWeight: 'bold',margin: 20}}
                            onPress={()=>navigation.navigate('Videoplay')}>
                                Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: 'grey'}}>12 Chapter</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: 'grey'}}>124 hour</Text>
                            </View>   
                            <TouchableHighlight style={{height:40,width: 100,backgroundColor: '#15ed4f', marginTop:'-50%',marginLeft:'65%',borderRadius:5,justifyContent:'center',alignItems: 'center'}}>
                                <Text style={{color:'white'}}>Biology</Text>
                                </TouchableHighlight>                 
                </View>       
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    scrollView:{
        height: '100%',
        width: '100%',
        
        
        
        
    },
    card: {
        height: 370,
        width: '85%',
        borderWidth: .3,
        borderRadius: 5,
        
        margin: 20,
        marginLeft: 33
        
        
    },

})
export default Videos;