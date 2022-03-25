import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, FlatList } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

// import LinearGradient from 'react-native-linear-gradient'


const DATA = [
    {
      id: 1,
      photo: require("../img/mon-phai-thu.png"),
      heading:'Món phải thử',
    },
    {
      id: 2,
      photo: require("../img/ca-phe.png"),
      heading:'Cà phê',
    },
    {
      id: 3,
      photo: require("../img/tra-trai-cay.png"),
      heading:'Trà trái cây',
    },
    {
      id: 4,
      photo: require("../img/tra-sua.png"),
      heading:'Trà sữa - Macchiato',
    },
    {
      id: 5,
      photo: require("../img/thuc-uong-khac.png"),
      heading:'Thức uống khác',
    },
    {
      id: 6,
      photo: require("../img/banh-man.png"),
      heading:'Bánh mặn',
    },
    {
      id: 7,
      photo: require("../img/banh-ngot.png"),
      heading:'Bánh ngọt - Snack',
    },
    {
      id: 8,
      photo: require("../img/bo-suu-tap-qua-tang.png"),
      heading:'Bộ sưu tập quà tặng',
    }
  ]


export default function ToptabPoint() {

  const renderItem = ({ item }) => (
        <View style={{ width: '48%', flexDirection:'row', backgroundColor:'#fff' ,borderRadius:10 }}>
          
           <Image
            style={styles.imgStyle}
            source={item.photo}
          /> 
          <Text style={styles.textHeading}>{item.heading}</Text>
          
        </View>
      );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Thực đơn</Text>
        
      </View>
        
        
        <View style={styles.wap}>
          <View style={styles.listCategory}>
          <FlatList
                  
                  data={DATA}
                  numColumns={2}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  columnWrapperStyle={{ justifyContent:'space-around',marginBottom:10 }}
              // style={{paddingLeft:10,paddingRight:10 }}
            />
          </View>
      </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#eee',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  wap:{
    // flex: 1,
    backgroundColor:'#eee',
    // height:500,
    paddingTop:16,
    
  },
  listCategory:{
    marginLeft:10,
    marginRight:10,
    
  },
  header:{
    flexDirection:'row',
    height:60,
    backgroundColor:'#fff',
    
    paddingLeft:20,
    paddingRight:20,
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  },
  icon:{
    
    marginLeft:'auto',
    alignSelf:'center',
    
    
  },
  textHeader:{
    
    fontSize:25,
    alignItems:'center',
    textAlign:'center',
    // margin:'auto',
    // paddingLeft:80
    
  },
  
  imgStyle:{
    width:70,
    height:70,
    borderRadius:10,
    margin:8
  },
  textHeading:{
    fontSize:15,
    fontWeight:'bold',
    alignSelf:'center'
  },
  
});
