import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Main = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.main}>
      <View>
        <Text style={styles.text}>STACK NAVIGATION</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text1}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color='#fff' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'#20315f'

  },
  button:{
    backgroundColor:'#AD40AF',
    padding:20,
    width:"90%",
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:40
  },
  text1:{
    fontWeight:'bold',
    fontSize:18,
    color:'#fff'
  }
})
export default Main;