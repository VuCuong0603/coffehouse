import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { SwiperFlatList } from 'react-native-swiper-flatlist';



const DATA = [
    {
      id: 1,
      photo: require('../img/Coffee-House-Slider1.jpg'),
      
    },
    {
      id: 2,
      photo: require('../img/Coffee-House-Slider2.jpg'),
      
    },
    {
      id: 3,
      photo: require('../img/Coffee-House-slider3.jpg'),
      
    },
    
  ]



export default function HomeScreenNotLogin({navigation}) {
    return (
        <View style={styles.container} >
          
          <ScrollView style={styles.wap}
          showsVerticalScrollIndicator={false}>
          
            <View style={styles.wapBody}>
              {/* <LinearGradient color={['#6e4b00', '#fff2d6']}> */}
                <SwiperFlatList autoplay autoplayDelay={4}
                 autoplayLoop 
                 index={2}  
                 autoplayLoopKeepAnimation
                style={styles.slider}
                data={DATA}
                renderItem={({ item }) => (
                    <View>
                      <Image
                      style={styles.imgStyleCol4}
                      source={ item.photo }
                      />
                    </View>
                  )}
                />
              {/* </LinearGradient>     */}
                <View style={styles.deliveryMethod}>
                  <Pressable style={styles.delivery}
                 // onPress={() =>navigation.navigate('Products')}
                  >
                    <View style={styles.wapIcon}>

                      <Fontisto name="motorcycle" color="#78cae2" size={18} style={styles.icon} />
                    </View>
                    <Text style={styles.deliveryText}>Giao tận nơi</Text>
                  </Pressable>
                  
                  <View style={styles.comeGet}>
                    <View style={styles.wapIconCup}>
                      <FontAwesome name="coffee" color="#f8918e" size={16} style={styles.icon} />

                    </View>
                    <Text style={styles.deliveryText}>Tự đến lấy</Text>
                  </View>
                </View>



                <View style={styles.cartBannerWap}>
                  <Image
                    style={styles.cartBannerImg}
                    source={require('../img/Cart.png')}
                  />
                  <Text style={ styles.textBanner}>Sử dụng app để tích điểm và đổi ưu đãi chỉ dành riêng cho thành viên bạn nhé!</Text>
                  <View style={styles.button}>
                    <TouchableOpacity 
                    style={{backgroundColor: "#fff",
                            borderWidth:1,
                            borderColor:'#d4d4d4',
                            // paddingHorizontal: 10,
                            paddingVertical: 3,
                            borderRadius: 20,
                            alignItems:'center'}}
                    onPress={() =>navigation.navigate('Login')} 
                    >
                      <Text style={{fontSize: 16,fontWeight: '500',color: "#c4671a",alignSelf:'center',marginLeft:15,marginRight:15,}}>Đăng nhập</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.banner}>
                  <Image
                  style={styles.bannerImg}
                  source={require('../img/bannerHome.jpg')}
                />
                </View>

                <View style={styles.cartBannerWap}>
                  <Text style={ styles.textBannerEvent}>THE COFFEE HOUSE' S REWARD</Text>
                  <Text style={ styles.textBannerHeaded}>Với The Coffee House's Reward</Text>

                  <Image
                    style={styles.beanBannerImg}
                    source={require('../img/logo-banner-1.png')}
                  />
                  <Text style={ styles.textBannerBoid}>Tích BEAN dễ dàng -  Thăng hạng nhanh hơn</Text>
                  <Text style={ styles.textBannerDesr}>Mô hình thăng hạng thành viên mới dễ dàng hơn</Text>

                  <Image
                    style={styles.storeBannerImg}
                    source={require('../img/logo-banner-2.png')}
                  />
                  <Text style={ styles.textBannerBoid}>Cửa hàng ưu đãi</Text>
                  <Text style={ styles.textBannerDesr}>Thoải mái đổi BEAN để nhận nhiều phần quà cực hấp dẫn!</Text>

                  <Image
                    style={styles.dimondBannerImg}
                    source={require('../img/logo-banner-3.png')}
                  />
                  <Text style={ styles.textBannerBoid}>Đặc quyền Kim Cương</Text>
                  <Text style={ styles.textBannerDesr}>Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương</Text>
                         
                  <View style={styles.button}>
                    <TouchableOpacity style={{backgroundColor: "#fff",
                            borderWidth:1,
                            borderColor:'#d4d4d4',
                            // paddingHorizontal: 10,
                            paddingVertical: 3,
                            borderRadius: 20,
                            alignItems:'center',
                          marginTop:30}}
                         // onPress={() =>navigation.navigate('Login')} 
                    >
                      <Text style={{fontSize: 16,fontWeight: '500',color: "#c4671a",alignSelf:'center',marginLeft:15,marginRight:15,}}>Đăng ký thành viên</Text>
                    </TouchableOpacity>
                  </View>
                </View>


                <View>
              </View>
            </View>
          </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee',
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
    marginLeft:15,
    marginRight:15,
    // marginBottom:30,
    // height:1000
  },
  
  wapBody:{
    // width:'100%',
    // height:215
    // marginBottom:20,
    marginTop:10,
  },
  slider:{
    width:'100%',
    borderRadius:10,
  },
  imgStyleCol4:{
    width:384,
    height:200,
    borderRadius:10
  },



  deliveryMethod:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom:10,
    marginTop:10,
  },
  wapIcon:{
    width:30,
    height:30,
    backgroundColor:'#d4eef6',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10
  },
  wapIconCup:{
    width:30,
    height:30,
    backgroundColor:'#fde2e5',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:10
  },
  delivery:{
    flex:1,
    
    backgroundColor:'#fff',
    borderRadius:10,
    paddingBottom:20,
    paddingTop:20,
    paddingLeft:15,
    marginRight:4
  },
  comeGet:{
    flex:1,
    backgroundColor:'#fff',
    borderRadius:10,
    paddingBottom:20,
    paddingTop:20,
    paddingLeft:15,
    marginLeft:4
  },
  
  icon:{
    alignSelf:'center',
    
  },
  deliveryText:{
    fontSize:16,
    fontWeight:'bold'
  },

  cartBannerWap:{
    backgroundColor:'#fff',
    textAlign:'center',
    alignItems:'center',
    borderRadius:14,
    padding:30,
    marginBottom:10,
    borderBottomColor:'#eee',
    borderBottomWidth:2,
    

  },
  cartBannerImg:{
    width:55,
    height:40,
  },
  textBanner:{
    fontSize:16,
    color:'#444',
    marginTop:30,
    marginBottom:30,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 1, height: 1},
    textAlign:'center',
  },
  button:{
    
    minWidth:110,
    
  },
  beanBannerImg:{
    width:100,
    height:80,
    margin:20,
  },
  storeBannerImg:{
    width:100,
    height:95,
    margin:20,
  },
  dimondBannerImg:{
    width:110,
    height:80,
    margin:20,
  },

  textBannerEvent:{
    fontSize:10,
    fontWeight:'bold',
    color:'#aaa',
    marginBottom:4
  },
  textBannerHeaded:{
    fontSize:18,
    color:'#333',
    fontWeight:'bold',
    paddingLeft:50,
    paddingRight:50,

  },

  textBannerBoid:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:6,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 10
  
  },
  textBannerDesr:{
    fontSize:15,
    color:'#333',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 1, height: 1},
  },


  banner:{
    marginBottom:10, 
  },
  bannerImg:{
    width:'100%',
    height:185,
    borderRadius:10
  },
});