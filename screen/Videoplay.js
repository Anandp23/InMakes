import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Videoplay = (navigation) =>{
        return(
            <ScrollView>
            <View style={styles.container}>
                <Image source={require('./images/class.jpg')} style={{height:280,width:500,}}></Image>
                
                <View style={{width:'100%',height:50,borderWidth:.5,backgroundColor:'#0d2f4f',flexDirection:'row',alignItems:'center',borderBottomColor: 'grey',borderTopColor: 'grey'}}>
                    <MaterialCommunityIcons name="chevron-left" color={'white'} size={35} style={{marginLeft:18}}/>
                    <Text style={{fontSize:14, color:'white',}}>Previous</Text>
                    <MaterialCommunityIcons name="circle-double" color={'#15ed4f'} size={16} style={{marginLeft:'18%',}} />
                    <Text style={{fontSize:14, color:'#15ed4f', margin:10}}>Part 1</Text>
                   
                    <Text style={{fontSize:14, color:'white',marginLeft:90}}>Next</Text>
                    <MaterialCommunityIcons name="chevron-right" color={'white'} size={35} />
                </View>
                <View style={styles.sampleBox}>
                    <View style={styles.sampleTextBox}>
                        <Text style={{fontSize:14, color:'white', margin:5}}>Your sample questions can be shown here no matter how long</Text>

                    </View>
                    <View style={{width:40,height:40,borderRadius:20,backgroundColor:'white', margin:20}}>
                        <Image source={require('./images/profile.webp')} style={{height:40,width:40,borderRadius:20}}></Image>
                    </View>
                </View>
                <View style={styles.questionBox}>
                    <Text style={{color:'white',margin: 10}}>Ask a quesyion?</Text>
                    
                    <TouchableHighlight style = {styles.postButton}>
                        <Text style={{color:'#0d2f4f'}}>Post</Text>
                    </TouchableHighlight>
                    
                </View>
                <View style={styles.chatBox}>
                    <MaterialCommunityIcons name="whatsapp" size={25} color={'#15ed4f'}/>
                    <Text style={{fontSize:16,color:'#15ed4f',margin:10}}>Chat with teacher</Text>
                </View>
                
            </View>
            </ScrollView>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d2f4f',
        alignItems:'center'
    },
    sampleBox: {
        width: '90%',
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: '80%',
        alignItems:'center',
        justifyContent: 'center'
    },
    sampleTextBox: {
        width: '60%',
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 5,
        
        alignItems:'center',
        justifyContent: 'center'
    },

    questionBox: {
        width:'90%',
        height:60,      
        borderRadius:5,
        marginTop:10,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:.5,
        borderColor:'grey',
        borderRadius:5
        
    },

    postButton: {
        height: 40,
        width:60,
        backgroundColor:'white',
        borderRadius:5,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: '50%',
       
    },

    chatBox: {
        width:'90%',
        height:60,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:.5,
        borderColor:'#15ed4f',
        borderRadius:5,
        marginTop:10,
        justifyContent: 'center'
    }
})

export default Videoplay;