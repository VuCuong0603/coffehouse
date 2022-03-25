import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Pressable } from 'react-native';

export default function Login( {navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.bannerloginImg}>
        <Image
          style={styles.loginImg}
          source={require('../img/bannerLogin.jpg')}
        />
        <Pressable 
          style={styles.close}
          onPress={() => navigation.goBack()}
        >
            <Ionicons   name="ios-close-circle" size={35} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.waplogin}>
        <View style={{alignItems:'center', paddingBottom:30,}}>
            <Text style={{textAlign:'center', fontSize:16,color:'#111'}}>Chào mừng bạn đến với</Text>
            <View style={{}}>
              <Image
                style={styles.logoImg}
                source={require('../img/thecoffeehouse.png')}
              
              />
            </View>
        </View>
        <View style={{}}>
          <View style={{marginBottom:20 , borderWidth:1,borderColor:'#aaa', borderRadius:10, display:'flex', flexDirection:'row'}}>
            <View style={{flex:1, alignSelf:'center', flexDirection:'row',justifyContent:'space-around'}}>
              <View style={{alignSelf:'center',}}>
                <View style={{backgroundColor:'red',marginLeft:10,marginRight:4, borderColor:'red' ,  borderRadius: 50, width:15, height:15}}>
                    <Ionicons name="star" color="yellow"  size={14} style={{alignSelf:'center'}} />
                </View>
              </View>
              <Text style={{flex:1,color:'#444', alignSelf:'center', fontSize:16, fontWeight:'400'}}>+84</Text>
            </View>
            <Text style={{width:1, backgroundColor:'#aaa', height:25, alignSelf:'center'}}></Text>
            <TextInput
              placeholder="Nhập số điện thoại"
              // autoCapitalize="none"
              style={{flex:4,paddingLeft:8,borderColor:'#aaa', height:50,fontSize:17, }}           
              />
          </View>
          <View style={{ borderRadius:3,  }}>
            <TouchableOpacity style={{backgroundColor: "#D8D8D8",
                    // paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems:'center'}}
            // onPress={() => {}} 
            >
              <Text style={{fontSize: 16,fontWeight: '500',color: "#fff",}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign:'center', fontSize:12,fontWeight:'700',margin:18, color:'gray', 
        }}>HOẶC</Text>

          <View style={styles.button}>
            <TouchableOpacity style={{backgroundColor: "black",
                    // paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems:'center'}}
            // onPress={() => {}} 
            >
              
              <Text style={{fontSize: 16,fontWeight: '500',color: "#fff",}}><Icon name="apple" color="#eee" size={17} style={styles.icon} /><Text>Tiếp tục bằng Apple</Text></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={{backgroundColor: "#118fec",
                    // paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems:'center'}}
            onPress={() => {}} 
            >
              <Text style={{fontSize: 16,fontWeight: '500',color: "#fff",}}><Icon name="facebook" color="#eee" size={17} style={styles.icon} /><Text>Tiếp tục bằng Facebook</Text></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={{backgroundColor: "white",
                    // paddingHorizontal: 10,
                    paddingVertical: 12,
                    borderRadius: 8,
                    alignItems:'center',
                  borderColor:'#111',
                borderWidth:1}}
            // onPress={() => {}} 
            >
              <Text style={{fontSize: 16,fontWeight: '500',color: "#111",}}><Icon name="google" color="#111" size={17} style={styles.icon} /><Text>Tiếp tục bằng Google</Text></Text>
            </TouchableOpacity>
          </View>

          <Text style={{textAlign:'center', margin:10, fontSize:16}}>Tiếng Việt</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  bannerloginImg:{
    flex:1,
    alignItems:'center'
  },
  loginImg:{
    flex:1,
    width: 450,
    height: 250
  },
  waplogin:{
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    backgroundColor:'#fff',
    flex:1.3,
    padding:20,
    paddingLeft:25,
    paddingRight:25,
    paddingTop:20,
    paddingBottom:20,
    marginTop: -100
  },
  logoImg:{ 
    margin:5,
    // zIndex:1
    width: 300,
    height: 25,
  },
  button:{
    marginBottom:10,
  },
  icon:{
    marginRight:15
    
  },
  close: {
    margin: 10,
    position: "absolute",
    top: 15,
    right: 10,
    width: 30,
    height: 30,
    color: "#eee"
  }
});


