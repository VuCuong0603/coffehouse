import React from 'react'
import { View, Text, ScrollView ,StyleSheet,TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Other({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <View> 
                <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>
                    Tiện ích
                </Text>
                <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10}}>
                   <TouchableOpacity style={{width:150,height:100,borderRadius:20,margin:10,backgroundColor:'#fff'}}>
                   <View style={{width:30,height:30,backgroundColor:'red',justifyContent:'center', borderRadius:20,marginBottom:30,marginLeft:10,marginRight:30,marginTop:10}}>
                      <Fontisto style={{alignSelf:'center'}} name="motorcycle" color="#78cae2" size={18} />
                    </View>
                    <Text style={{textAlign:'center'}}>Lịch Sử Đơn hàng</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={{width:150,height:100,borderRadius:20,margin:10,backgroundColor:'#fff'}}>
                    <View style={{width:30,height:30,justifyContent:'center',backgroundColor:'red', borderRadius:20,marginBottom:30,marginLeft:10,marginRight:30,marginTop:10}} >
                      <FontAwesome style={{alignSelf:'center'}} name="coffee" color="#f8918e" size={16} />
                    </View>
                    <Text style={{textAlign:'center'}}>Điều Khoản</Text>
                  </TouchableOpacity>
                </View>
                <View>
                <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10}}>
                   <TouchableOpacity style={{width:150,height:100,borderRadius:20,margin:10,backgroundColor:'#fff'}}>
                   <View style={{width:30,height:30,backgroundColor:'red',justifyContent:'center', borderRadius:20,marginBottom:30,marginLeft:10,marginRight:30,marginTop:10}}>
                      <Fontisto style={{alignSelf:'center'}} name="motorcycle" color="#78cae2" size={18} />
                    </View>
                    <Text style={{textAlign:'center'}}>Lịch Sử Đơn hàng</Text>
                   </TouchableOpacity>
                  <TouchableOpacity style={{width:150,height:100,borderRadius:20,margin:10,backgroundColor:'#fff'}}>
                    <View style={{width:30,height:30,justifyContent:'center',backgroundColor:'red', borderRadius:20,marginBottom:30,marginLeft:10,marginRight:30,marginTop:10}} >
                      <FontAwesome style={{alignSelf:'center'}} name="coffee" color="#f8918e" size={16} />
                    </View>
                    <Text style={{textAlign:'center'}}>Điều Khoản</Text>
                  </TouchableOpacity>
                </View>
                </View>
                
            </View>
            <View style={{margin:15}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Hỗ Trợ</Text>
                <View>
                    <TouchableOpacity style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between',margin:1}}>
                    <FontAwesome  name="star" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Đánh giá đơn hàng</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between'}}>
                    <FontAwesome  name="coffee" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Liên hệ và góp ý</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{margin:15}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Tài Khoản</Text>
                <View>
                <TouchableOpacity style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between',margin:1}}>
                    <FontAwesome  name="star" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Thông tin cá nhân</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between'}}>
                    <FontAwesome  name="coffee" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Địa Chỉ đã Lưu</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between',margin:1}}>
                    <FontAwesome  name="star" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Cài đặt</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>navigation.navigate('Login')}
                    style={{flexDirection:'row',width:330,height:50,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'space-between'}}>
                    <FontAwesome  name="coffee" color="#f8918e" size={16} />
                    <Text style={{marginRight:80}}>Đăng nhập</Text>
                    <FontAwesome  name="angle-right" color="#f8918e" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
  container:{flex:1,backgroundColor:'#eee'},
  tienich:{},
  hotro:{},
  taikhoan:{},
})
