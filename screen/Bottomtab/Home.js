import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import profile from '../images/profile.webp'
// Tab ICons...




// Menu
import menu from '../images/grid.png';
import close from '../assets/close.png';


// Photo
import photo from '../assets/photo.jpg';

const Home = ({navigation}) =>{
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <View style={{backgroundColor:'#15ed4f',width:65,height:65,alignItems:'center',justifyContent:'center',borderRadius:35}}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          
        }}></Image>
        </View>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>James Carter</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>ID: 12345678</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }


            {TabButton(currentTab, setCurrentTab, "Exam corner", )}  
          {TabButton(currentTab, setCurrentTab, "Subscription", )}
          {TabButton(currentTab, setCurrentTab, "Analytics", )}
          {TabButton(currentTab, setCurrentTab, "Downloads",)}
          {TabButton(currentTab, setCurrentTab, "Notifications", )}
          {TabButton(currentTab, setCurrentTab, "Referrals", )}
          {TabButton(currentTab, setCurrentTab, "Share App")}
          

        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginLeft:15,marginBottom:40}}>
            <MaterialCommunityIcons name='border-all-variant' size={30} color={'red'}/>
          <Text style={{fontSize:15,fontWeight: 'bold',color:'red',marginLeft:15}}>LogOut</Text>
        </View>

        <View style={{alignItems:'center',marginBottom:55,marginLeft:5}}>
            <TouchableHighlight style={{alignItems:'center',justifyContent: 'center',borderWidth:1 ,borderColor:'#15ed4f', height:40, width:150}}>
                <Text style={{color:'#15ed4f'}}>Enquire now</Text>
            </TouchableHighlight>
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        
        

          <ScrollView>
            <View  style = {styles.maincontainer}>
                
                <View style = {styles.MainheadingView}>
                    
                <Animated.View style={{
                        transform: [{
                        translateY: closeButtonOffset
                    }]
                    }}>
                    <TouchableOpacity onPress={() => {
                        // Do Actions Here....
                        // Scaling the view...
                        Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()

                        Animated.timing(offsetValue, {
                        // YOur Random Value...
                        toValue: showMenu ? 0 : 230,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()

                        Animated.timing(closeButtonOffset, {
                        // YOur Random Value...
                        toValue: !showMenu ? -30 : 0,
                        duration: 300,
                        useNativeDriver: true
                        })
                        .start()

                        setShowMenu(!showMenu);
                    }}>
                    
                        <View style = {styles.drawerButton}>
                        <Image source={showMenu ? close : menu} style = {styles.drawerImage}></Image>
                    
                        </View>
                    </TouchableOpacity>  

                    </Animated.View>            
                    <Image source={require('../logo.webp')} style = {styles.inmakesLogo}></Image>
                    <View style = {styles.classesView}>
                        <TouchableHighlight style = {styles.classesButton}>
                            <Text></Text>
                        </TouchableHighlight>
                        <Text style = {styles.classesText}>Classes</Text>
                    </View>
                </View>
                <View style = {styles.studentdetailView}>
                    <Text style = {styles.wishText}>Goodmorning</Text>
                    <Text style = {styles.nameText}>Aaron Taylor</Text>
                </View>
                <View style = {styles.classboxView}>
                    <Text style={styles.classText}>Class</Text>
                    <Text style = {styles.yearText}>Plus two science</Text>
                    <MaterialCommunityIcons style = {styles.downArrow} name="chevron-down" color={'white'} size={22} />
                </View>

                <View style = {styles.scrollcontainerView}>
                    
                    <ScrollView style={styles.container1} horizontal= {true}>
                    <View style={styles.card}
                    
                    >
                        <TouchableHighlight style = {styles.classesButton1}
                        underlayColor={'#3cc260'}
                        onPress={()=>navigation.navigate('Course')}>
                            <Text></Text>
                        </TouchableHighlight>
                    <Text style = {styles.classesText1}>Biology</Text>
                    </View>
                    
                    <View style={styles.card}
                    >
                        <TouchableHighlight style = {styles.classesButton1}
                        onPress={()=>navigation.navigate('Course')}>
                            <Text></Text>
                        </TouchableHighlight>
                    <Text style = {styles.classesText1}>Physics</Text>
                    </View>

                    <View style={styles.card}
                    >
                        <TouchableHighlight style = {styles.classesButton1}
                        onPress={()=>navigation.navigate('Course')}>
                            <Text></Text>
                        </TouchableHighlight>
                    <Text style = {styles.classesText1}>Chemistry</Text>
                    </View>

                    <View style={styles.card}
                    >
                        <TouchableHighlight style = {styles.classesButton1}
                        onPress={()=>navigation.navigate('Course')}>
                            <Text></Text>
                        </TouchableHighlight>
                    <Text style = {styles.classesText1}>Maths</Text>
                    </View>

                    <View style={styles.card}
                    >
                        <TouchableHighlight style = {styles.classesButton1}
                        onPress={()=>navigation.navigate('Course')}>
                            <Text></Text>
                        </TouchableHighlight>
                    <Text style = {styles.classesText1}>English</Text>
                    </View>
                    
                    </ScrollView>
                </View>

                <View style = {styles.scrollcontainerView1}>
                    <Text style={styles.heading}>Recent courses</Text>
                    <ScrollView style={styles.container2}
                    horizontal= {true}>
                    <View style={styles.card1}>
                        <Image source={require('../images/course.jpg')} style={{height: 160,width: 280,}}>                        
                        </Image>
                        <View style = {{width:'80%',height:40,marginTop:-40,alignItems:'center',justifyContent: 'center',flexDirection: 'row',marginRight:150}}>
                            <MaterialCommunityIcons style = {styles.resentIconStyle} name="play-circle" color={'white'} size={22} />
                            <Text style = {styles.coursetitle}>Course Title</Text>
                        </View>
                    
                    </View>

                    <View style={styles.card1}>
                        <Image source={require('../images/course.jpg')} style={{height: 160,width: 280,}}>                        
                        </Image>
                        <View style = {{width:'80%',height:40,marginTop:-40,alignItems:'center',justifyContent: 'center',flexDirection: 'row',marginRight:150}}>
                            <MaterialCommunityIcons style = {styles.resentIconStyle} name="play-circle" color={'white'} size={22} />
                            <Text style = {styles.coursetitle}>Course Title</Text>
                        </View>
                    
                    </View>

                    <View style={styles.card1}>
                        <Image source={require('../images/course.jpg')} style={{height: 160,width: 280,}}>                        
                        </Image>
                        <View style = {{width:'80%',height:40,marginTop:-40,alignItems:'center',justifyContent: 'center',flexDirection: 'row',marginRight:150}}>
                            <MaterialCommunityIcons style = {styles.resentIconStyle} name="play-circle" color={'white'} size={22} />
                            <Text style = {styles.coursetitle}>Course Title</Text>
                        </View>
                    
                    </View>

                    <View style={styles.card1}>
                        <Image source={require('../images/course.jpg')} style={{height: 160,width: 280,}}>                        
                        </Image>
                        <View style = {{width:'80%',height:40,marginTop:-40,alignItems:'center',justifyContent: 'center',flexDirection: 'row',marginRight:150}}>
                            <MaterialCommunityIcons style = {styles.resentIconStyle} name="play-circle" color={'white'} size={22} />
                            <Text style = {styles.coursetitle}>Course Title</Text>
                        </View>
                    
                    </View>
                    
                    </ScrollView>
                </View>

                <View style = {styles.scrollcontainerView2}>
                    
                    <ScrollView style={styles.container2} horizontal={true}>
                        <View style={styles.card2}>
                            <Image style = {styles.cont2Image}></Image>
                        <Text style= {styles.cont2Text1}>Target live classes</Text>
                        <Text style={styles.cont2Text2}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                        <TouchableHighlight style = {styles.cont2button}>
                            <Text style = {styles.buttonText}>Book a free class</Text>
                        </TouchableHighlight>
                        </View>

                        <View style={styles.card2}>
                            <Image style = {styles.cont2Image}></Image>
                        <Text style= {styles.cont2Text1}>Avail free online counselling session</Text>
                        <Text style={styles.cont2Text2}>By LearningHub's carrer experts</Text>
                        <TouchableHighlight style = {styles.cont2button2}>
                            <Text style = {styles.buttonText}>Schedule a call</Text>
                        </TouchableHighlight>
                        </View>

                        
                    </ScrollView>
                </View>
               
            </View>
            </ScrollView>
        </Animated.View>

      {/* </Animated.View> */}

    </SafeAreaView> 
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <MaterialCommunityIcons name='border-all-variant' size={30} color={'#15ed4f'}></MaterialCommunityIcons>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2f4f',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  maincontainer: {
    flex: 1,
    alignItems :'center'
},

imagesize: {
    height: 500,
    width: 300,
    borderRadius: 10
 
},


container1: {  
   
    
  },

  scrollcontainerView: {
    height: 60,
    width: '95%',
    
    marginTop: 20
  },

card: {
    flex: 1,
    flexDirection: 'row',        
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 110,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
    
  },

MainheadingView: {
    height: 40,
    width: '95%',
    flexDirection: 'row',
    marginTop: 40
},

drawerButton: {
    height: 35,
    width: 35,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    backgroundColor: '#15ed4f'
},

inmakesLogo: {
    height: 40,
    width: 150,
    marginLeft: 20
},

drawerImage: {
    height: 15,
    width: 15
},
classesView: {
    height: 35,
    width: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#15ed4f',
    borderRadius: 5,
    marginLeft: '25%',
    justifyContent: 'center',
    alignItems: 'center'
},

classesButton: {
    height: 20,
    width: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    paddingRight: 10
},

classesButton1: {
    height: 20,
    width: 20,
    backgroundColor: '#15ed4f',
    borderRadius: 10,
    padding: 10,
},

classesText1: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 14
},


classesText: {
    color: '#15ed4f',
    paddingLeft: 10,
    fontSize: 14
},

studentdetailView: {
    width: '95%',
    height: 40,
    marginTop: 40
},

wishText: {
    fontSize: 16,
    color: '#0d2f4f',
},

nameText: {
    fontSize: 26,
    color: '#0d2f4f',
    fontWeight: 'bold'
},

classboxView: {
    width: '95%',
    height: 80,
    backgroundColor: '#0d2f4f',
    marginTop: 60,
    borderRadius: 5,
    
},
downArrow: {
    marginLeft: '85%',
    marginTop: -30
},
classText: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 30,
    marginTop: 15
},
yearText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 30,
    marginTop: 5,
    fontWeight: 'bold'
},

heading: {
    fontSize: 16,
    color: 'black',
    padding: 5
    
    
  },


  scrollcontainerView1: {
    height: 200,
    width: '95%',
    marginTop: 10,     
  },


  container2: {
         
    width: '100%'
    
  },
  card1: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    height: 160,
    width: 280,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 8,
    
    
  },

  
  coursetitle: {
    color: 'white',
    fontSize: 16,
    marginLeft:10
    
  },

  scrollcontainerView2: {
    height: '50%',
    width: '95%',
    marginTop: 20,           
  },

  container2: {
    width: '100%',
    height: '70%'
  },
  card2: {
    flex: 1,
    backgroundColor: '#0d2f4f',
    
    height: 400,
    width: 280,
    
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10
   
  },

  cont2Image: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    opacity: .2,
    borderRadius: 50,
    marginTop: '15%',
    marginLeft: '10%'
  },

  cont2Text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: 20
  },

  cont2Text2: {
    margin: '10%',
    color: 'grey',
    fontSize: 14
  },

  cont2button: {
    width: '70%',
    height: 40,
    backgroundColor: '#15ed4f',                
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },

  cont2button2: {
    width: '70%',
    height: 40,
    backgroundColor: '#15ed4f',                
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },


});

export default Home;