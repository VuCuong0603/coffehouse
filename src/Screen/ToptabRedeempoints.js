import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, Pressable, FlatList } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import LinearGradient from 'react-native-linear-gradient'

export default function ToptabRedeempoints({router,navigation}) {
  // const {name} = router.params
  return (
    <View style={styles.container} >
      <View style={styles.wap}>
          <View style={styles.banner}>
            <Image
            style={styles.voucherImg}
            source={require('../img/icon-voucher-1.png')}
            />
            <Text style={styles.text}>Bạn có thể nhập khuyến mãi để nhận Voucher</Text>
          </View>

          <View style={styles.range}>
            <View style={styles.input}>
              <TextInput
              placeholder="Nhập mã khuyến mãi"
              // autoCapitalize="none"
              style={styles.textInput}           
              />
              <MaterialCommunityIcons name="qrcode-scan" color="#aaa" size={20} style={styles.icon} />
            </View>
            

            <View style={styles.button}>
              <TouchableOpacity style={{backgroundColor: "#c4671a",
                      // paddingHorizontal: 10,
                      paddingVertical: 12,
                      borderRadius: 8,
                      alignItems:'center'}}
              onPress={() => {}} 
              >
                <Text style={{fontSize: 16,fontWeight: '500',color: "#fff",}}>Áp dụng</Text>
              </TouchableOpacity>
              </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    backgroundColor: '#f4f4f4',
    // alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    // backgroundColor:'red'
    
  },
  wap:{
    // height:'auto'
  },
  range:{
    marginLeft:14,
    marginRight:14,
    marginTop:40,

  },
  banner:{
    paddingLeft:70,
    paddingRight:70,
    alignItems:'center',
  },
  voucherImg:{
    width:100,
    height:100,
    borderRadius:50,
  },
  text:{
    fontSize:16,
    color:'#333',
    marginTop:20, 
    textAlign:'center',
    
  },
  input:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:50,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginBottom:10,
    backgroundColor:'#fff',

  },
  textInput:{
    backgroundColor:'#fff',
    width:'90%',
    fontSize:16,
    color:'#333'
  },
  icon:{
    alignSelf:'center',
  },
  button:{},
});
