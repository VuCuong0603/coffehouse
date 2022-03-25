import React from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
const sizes = ['S', "M", "L", 'XL', 'XXL']
export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { detail } = route.params;

  // const onAddCart = () => dispatch({ type: 'ADD_QUANTITY', data: item })
  const onAddCart = () => {
    dispatch({ type: 'ADD_CART', detail: detail })
  }
  return (
    <View>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
     <View>
      <TouchableOpacity style={{backgroundColor:'yellow',borderRadius:15,flexDirection:'row'}}
           onPress={() => navigation.navigate('Cart')}>
        <Ionicons   name="cart" size={35} color="blue" />
      <Text style={{fontSize:20,fontWeight:"bold"}}>  giỏ hàng</Text>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => navigation.navigate('Order')}>
      <Ionicons   name="ios-close-circle" size={35} color="blue" />
      </TouchableOpacity>
      </View>
     </View>
      {/* <Image source={{ uri: getImage(detail?.images?.[0]) }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} /> */}
      <Image source={{ uri: detail?.image }}
        style={{ width: '100%', height: 360, resizeMode: 'contain' }} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{detail.product_name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={{
            marginRight: 5,
            fontWeight: 'bold'
          }}>{detail?.price}</Text>
          <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}>{detail.price}</Text>
          <Text style={{ borderWidth: 1, padding: 5, marginLeft: 10, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
            50%
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          paddingHorizontal: 40,
          marginTop: 10
        }}>
          {/* {sizes.map((e, i) => {
            const isChecked = e === detail?.size?.[0]
            return (
              <TouchableOpacity key={i}
                style={{
                  borderRadius: 20, backgroundColor: isChecked ? 'grey' : 'white',
                  borderWidth: 1, padding: 2, height: 40, width: 40, justifyContent: 'center', alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 10 }}>{e}</Text>
              </TouchableOpacity>
            )
          })} */}
        </View>
        <TouchableOpacity
         onPress={onAddCart}
          style={{
            backgroundColor: '#FF5254',
             width: '60%', borderWidth: 1,
            borderRadius: 20, paddingVertical: 12,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>ADD TO BAG</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}