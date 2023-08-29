
import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Otp from './screen/Otp';
import Register from './screen/Register';
import Studetails from './screen/Studetails';
import Apptitle from './screen/Apptitle';
import Course from './screen/Course';

import Home from './screen/Bottomtab/Home';
import Recent from './screen/Bottomtab/Recent';
import Exams from './screen/Bottomtab/Exams';
import Profile from './screen/Bottomtab/Profile';
import Contact from './screen/Bottomtab/Contact';

import Videos from './screen/Toptab/Videos';
import Chaptertest from './screen/Toptab/Chaptertest';
import Resources from './screen/Toptab/Resources';
import QNBank from './screen/Toptab/QNBank';

import Examcorner from './screen/Drawer/Examcorner'
import Subscription from './screen/Drawer/Subscription'
import Analytics from './screen/Drawer/Analytics'
import Downloads from './screen/Drawer/Downloads'
import Notification from './screen/Drawer/Notification'
import Referrals from './screen/Drawer/Referrals'
import Shareapp from './screen/Drawer/Shareapp'
import Logout from './screen/Drawer/Logout'
import Videoplay from './screen/Videoplay'
import School from './screen/School';



const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();


function Mystack(){
  return (
    
      <Stack.Navigator>
       
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}}/>
        <Stack.Screen name="Studetails" component={Studetails} options={{headerShown: false}}/>
        <Stack.Screen name='School' component={School} options={{headerShown: false}}/>
        <Stack.Screen name='Apptitle' component={Apptitle} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Bottom' component={MyBottom} options={{headerShown: false}} />
        <Stack.Screen name='Course' component={Course} options={{headerShown:false}}/>
        <Stack.Screen name='MyTop' component={MyTop} options={{headerShown:false}}/> 
        <Stack.Screen name='Videoplay' component={Videoplay} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>    
  )
}

function MyBottom(){
  return(
    
    <Bottom.Navigator initialRouteName='Home'
    
                screenOptions={{
                  tabBarActiveTintColor:'#15ed4f',
                  tabBarStyle: {
                    position: 'relative',
                    bottom:5,
                    right:5,
                    height: 50,                    
                    borderRadius: 25
                  
                }}}
            
                      >
        <Bottom.Screen name='Home' component={Home} options={{tabBarLabel: 'Home' , headerShown: false,  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),}}/>
        <Bottom.Screen name='Recent' component={Recent} options={{tabBarLabel: 'Recent' , headerShown: false ,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="play-outline" color={color} size={size} />
                  ) }}/>
        <Bottom.Screen name='Exams' component={Exams} options={{tabBarLabel: 'Exams' , headerShown: false ,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="clipboard-text-multiple" color={color} size={size} />
                  )}}/>
        <Bottom.Screen name='Profile' component={Profile} options={{tabBarLabel: 'Profile' , headerShown: false ,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-outline" color={color}  size={22} />
                  ) }}/>
        <Bottom.Screen name='Contact' component={Contact} options={{tabBarLabel: 'Contact' , headerShown: false ,
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="phone" color={color} size={size} />
                  )}}/>
        
      </Bottom.Navigator>
      
  )
}

function MyTop(){
  return(
    <NavigationContainer
    independent={true}>
      <View style={{height:'30%',width:'100%',backgroundColor: '#0d2f4f'}}>
        <View style = {{height:30,width:30,borderWidth:1,borderColor:'white',justifyContent: 'center',alignItems: 'center',borderRadius:5,marginTop:40,marginLeft:30}}>
           <MaterialCommunityIcons name='chevron-left' color={'#3cc260'} size={20}/>                               
        </View>
        <Text style={{fontSize:26,fontWeight:'bold',marginLeft:'40%',marginTop:-35,color: 'white'}}>Biology</Text>
        <Text style={{fontSize:30,fontWeight:'bold',marginLeft:'6%',marginTop:50,color: 'white'}}>Long chapter name can be shown here</Text>
        <View style = {{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
                                <MaterialCommunityIcons name="album" color={'#15ed4f'} size={20} style={{marginLeft: 10}}/>
                                <Text style={{marginLeft:5,color: '#15ed4f'}}>Chapter 1</Text>
                                <MaterialCommunityIcons name="album" color={'#15ed4f'} size={20} style={{marginLeft: 20}}/>
                                <Text style={{marginLeft:5, color: '#15ed4f'}}>3 Parts</Text>
                            </View>
      </View>
    <Top.Navigator style={{
      height:'40%',
      width:'100%',
      backgroundColor: '#0d2f4f',
     
    }}
    screenOptions={{
      tabBarStyle: {
      backgroundColor: '#0d2f4f',
   
      },
      tabBarLabelStyle: {
        fontSize: 10,
        color: 'white'
      }
    }}>
      
      <Top.Screen name='Videos' component={Videos} options={{tabBarLabel: 'Videos'}} />
      <Top.Screen name='Chaptertest' component={Chaptertest} options={{tabBarLabel: 'Chapter Test'}}/>
      <Top.Screen name='Resources' component={Resources} options={{tabBarLabel: 'Resourses'}}/>
      <Top.Screen name='QNBank' component={QNBank} options={{tabBarLabel: 'QN Bank'}}/>
      <Stack.Screen name='Videoplay' component={Videoplay} options={{headerShown:false}}/>
      
    </Top.Navigator>
    </NavigationContainer>
  )
}




export default function App(){
  return(
    <NavigationContainer>
      <Mystack/>
      
    </NavigationContainer>
  )
}

