import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Course = ({navigation}) =>{
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <View style={{height: '30%', width: '100%', backgroundColor: '#0d2f4f'}}>
                    <TouchableHighlight style={styles.backButton}
                    onPress={()=>navigation.navigate('Home')}>
                        <MaterialCommunityIcons name="chevron-left" color={'#15ed4f'} size={20}></MaterialCommunityIcons>
                    </TouchableHighlight>
                    <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold', marginLeft: 25, marginTop: 20}}>Biology</Text>
                    <View style = {{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'#15ed4f'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: '#15ed4f'}}>12 Chapter</Text>
                                <MaterialCommunityIcons name="album" color={'#15ed4f'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: '#15ed4f'}}>124 hour</Text>
                            </View>
                </View>
                <View style = {{height: '70%', width: '100%', backgroundColor: 'white', alignItems: 'center'}}>
                    <ScrollView style={styles.scrollStyle}>
                        <View style={styles.card}>
                            <TouchableOpacity onPress={()=>navigation.navigate('MyTop')}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin:20}}
                            
                            
                            
                            >Long chapter name can be shown here.</Text></TouchableOpacity>
                            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5}}>3 Parts</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin:20}}>Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5}}>3 Parts</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin:20}}>Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5}}>3 Parts</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin:20,}}>Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5}}>3 Parts</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin:20}}>Long chapter name can be shown here.</Text>
                            <View style = {{flexDirection: 'row', marginTop: '5%'}}>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'grey'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5}}>3 Parts</Text>
                            </View>
                        </View>
                        
                    </ScrollView>
                 </View>

                
            </View>
        )
    
}

const styles = StyleSheet.create({
    card: {
        
        height: 150,
        width: 360,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'center'
        
    },
    scrollStyle: {
        borderRadius:10,
        backgroundColor: 'white',
        marginTop:-20,
  
    },

    backButton: {
        height: 30,
        width: 30,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Course;