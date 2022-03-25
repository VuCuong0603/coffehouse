import React ,{useEffect, useState, useRef}from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, FlatList, ScrollView, Pressable, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {getProduct} from '../sevices/Api';


export default function Order({ navigation }) {


  const onMoveToDetail = (data) => () => {
    navigation.navigate('Detail', { detail: data });
  }
  const [Order,setOrder] = useState()
  useEffect(() => {  
    // const axios = require('axios');
    const getApiOrder = async () =>{
      const rs = await getProduct()
      console.log('rs', rs)
      setOrder(rs.data.data)
    }
    getApiOrder()
  }, [])
  const renderItem = ({ item }) => (
    
    <TouchableOpacity  onPress={onMoveToDetail(item)}
    style={{ width: '100%', flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',
    padding:15,marginBottom:10, borderRadius:14}}
    >
      <View style={styles.textProduct}>
        <Text style={styles.textProductHeader}>{item.product_name}</Text>
        <Text
          numberOfLines={2} 
          ellipsizeMode="tail"
          style={styles.textProductDesc}>{item.description}</Text>
        <Text style={styles.textProductPrice}>{item.price}đ</Text>
      </View>
      <View>
        <Image
        style={styles.imgProduct}
        // source={ item.photo }
        source={ {uri: (item.image)} }
      />
      </View>
      
    </TouchableOpacity>
  );

    
      return (
        <View style={styles.container} >
          <View style={styles.wap}>
          
            <View style={styles.wapHeading}>
              <View style={styles.iconColor}>
                <Fontisto name="motorcycle" color="#78cae2" size={18} style={styles.icon} />
              </View>
              <View>
                <View style={styles.wapText}>
                  <Text style={styles.textBoid}>Giao tận nơi</Text>
                  <Ionicons name="chevron-down" color="#ccc" size={12} style={styles.icon} />
                </View>
                <Text style={styles.textDesr}>Các món được giao đến địa chỉ của bạn</Text>
              </View>
            </View>
            

            <View style={styles.wapScrollList}>
              <Pressable style={styles.listItem} >
                  <Text style={{fontSize:18, marginLeft:6}}>Thực đơn</Text>
                  <Ionicons name="chevron-down" color="#888" size={20} style={styles.icon} />
              </Pressable>
              <View style={styles.wapSearch}>
                <Ionicons name="search" color="#888" size={20} style={styles.icon} />
              </View>
              <View style={styles.wapHeart}>
                <Ionicons name="heart" color="#888" size={18} style={styles.icon} />
              </View>
            </View>
              <View style={styles.groupItem}>
                <Text style={styles.header}>Món phải thử</Text>
                <View style={[styles.listItemProduct]}>
                  <FlatList
                          data={Order}
                          numColumns={1}
                          renderItem={renderItem}
                          keyExtractor={item => item._id} 
                          showsHorizontalScrollIndicator={false} 
                    />
                </View>
              </View>
            
          </View>
          
        </View>
    )
    }
    



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f4f4f4',
    // alignItems: 'center',
    justifyContent: 'center',

  },
  linearGradient:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  wap:{
    // marginLeft:15,
    // marginRight:15,
    // marginBottom:30,
    height:800
  },

  wapHeading:{
    flexDirection:'row',
    backgroundColor:'#fff',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:35,
    paddingBottom:18,
    paddingTop:150
  },
  iconColor:{
    width:30,
    height:30,
    // alignSelf:'center',
    backgroundColor:'#d4eef6',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10,
    margin:6,
    
  },
  wapText:{
    flexDirection:'row',

  },
  textBoid:{
    fontSize:14,
    fontWeight:'bold',
    marginRight:2
    
  },
  textDesr:{
    fontSize:14,
    color:'#555'
  },
  wapScrollList:{
    backgroundColor:'#f4f4f4',
    flexDirection:'row',
    // marginLeft:14,
    // marginRight:14,
    padding:10,
    justifyContent:'space-around'
  },
  listItem:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-between',
    backgroundColor:'#e2e2e2',
    padding:10,
    borderRadius:10,
  },
  wapSearch:{
    width:44,
    height:44,
    backgroundColor:'#e2e2e2',
    width:'12%',
    borderRadius:10,
    justifyContent:'center',
    
  },
  wapHeart:{
    width:44,
    height:44,
    backgroundColor:'#e2e2e2',
    width:'12%',
    borderRadius:10,
    // alignSelf:'center',
    justifyContent:'center',
  },
 
  
  icon:{
    alignSelf:'center',
    justifyContent:'center'
  },

  groupItem:{
    marginTop:30,
  },
  header:{
    fontSize:22,
    fontWeight:'600',
    marginLeft:20,
    marginLeft:20,
  },
  listItemProduct:{
    backgroundColor:'#f4f4f4',
    padding:14,
    justifyContent:'center'

  },

  textProduct:{
    width:'70%'
    
  },
  textProductHeader:{
    
    fontSize:18,
    fontWeight:'bold'
  },
  textProductDesc:{
    // width:'50%',
    fontSize:16,
    color:'#666',
    
  },
  textProductPrice:{
    fontSize:18,
    color:'#111',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: -1, height: 1},
    marginTop:10
  },
  imgProduct:{
    alignSelf:'center',
    borderRadius:10,
    width:95,
    height:95,
  },
});