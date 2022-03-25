import React,{useEffect,useState} from 'react'
import { View, Text,FlatList, TouchableOpacity,Image, TextInput } from 'react-native'
import {getAllStore} from '../sevices/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
export default function Store({navigation}) {
    const [store, setAllStore] = useState()
    useEffect(() => {
        const getAipallStore=async () => {
            const rs=await getAllStore()
            console.log('rs', rs)
            setAllStore(rs.data)
        }
        getAipallStore()
    }, [])
    const renderItem=({item}) => (
        <TouchableOpacity 
        style={{flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#e2e2e2',
        padding:10,
        borderRadius:10,
        margin:10,

        }} >
             <Image style={{  width:'30%',
        height:110,
        alignSelf:'center',
        borderRadius:10,
        marginLeft:5,
        marginRight:5
        }} source={{ uri:item.image_1}}/>
             <View>
                 <Text style={{color:'gray',fontSize:13,fontWeight:'bold',marginVertical:5}}>The coffee House</Text>
                 <Text style={{ fontSize:18, marginRight:90,}}>{item.street}, {item.district_name}, {item.state_name}, {item.country}</Text>
             </View>
        </TouchableOpacity>
    );

return (
        <View style={{flex:1, backgroundColor: '#f4f4f4',}}>
            <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row',margin:5,backgroundColor:'#C3C3C3',width:240,borderRadius:15,justifyContent:'space-around',}}>
            <Ionicons name="search" color="#78cae2" size={25} style={{alignSelf:'center'}}/>
                <TextInput
                 placeholder="Nhập địa chỉ cần tìm"
                  style={{paddingRight:50,alignSelf:'center'}}
                 />
            </View>
            <TouchableOpacity onPress={() =>navigation.navigate('Map')} 
             style={{width:100,height:50,backgroundColor:'#C3C3C3',borderRadius:15,margin:5}}>
            <Feather name="map" color="#78cae2" size={25} style={{alignSelf:'center'}}/>
                <Text style={{alignSelf:'center'}}>Bản đồ</Text>
            </TouchableOpacity>
            </View>
            <View>
             <TouchableOpacity style={{justifyContent:'center',width:340,height:40,backgroundColor:'#C3C3C3',
margin:10,borderRadius:10}}>
                 <Text style={{textAlign:'center'}}>Tên các cửa hàng khác</Text>
             </TouchableOpacity>
             <View><FlatList  
                    data={store}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}   
                     
             /></View>
            </View>
        </View>
        
    
    )
}

