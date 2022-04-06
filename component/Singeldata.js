import React,{ useState,useContext,useEffect }  from 'react'
import {View , Text,StyleSheet,Pressable,Image,FlatList,ToastAndroid} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import {AppContext} from '../component'
import axios from 'axios';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro"
import Fontisto from "react-native-vector-icons/Fontisto"
import Foundation from "react-native-vector-icons/Foundation"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import RNIMigration from "react-native-vector-icons/RNIMigration"
import AntDesign from "react-native-vector-icons/AntDesign"

import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

 const Singeldata = (props)=>{
    const {UpdateOnoff,cheng,setCheng,DeleteItem,dataValuesingel,Updateconnected,showToast} = useContext(AppContext)
    const [checkIcon,setCheckIcon]=useState(false)
 



// ارتبازط با سرور
useEffect(()=>{
try {
    dataValuesingel.forEach(i => {
        console.log( "i.connected",i.connected)
    console.log("=>>",i.urlon)
    axios({
        url : 'read?format=json',
        baseURL : `${i.urlon}`,
        method : "GET",
        responseType : "json",
    
        timeout : 2000,
        
    
        ValidityState : (status) => {
            return status >= 200 && status < 300
        }
    
        })
        
            .then((res) => {
                if (res.data.connected != true) {                
                 ToastAndroid.show('ارتباط با سرور قطع است',ToastAndroid.LONG)                
                }else{
                    const data = {
                        id : i.id,
                        connected : true
                    }
                    Updateconnected(data)                
                }
            })
            .catch((err) => {
                // console.log("----------",err)
                // if (err){
                //     ToastAndroid.show('لطفا اینترنت چک کنید',ToastAndroid.LONG)  
                //     const data = {
                //         id : i.id,
                //         connected : false
                //     }
                //     Updateconnected(data)                
                // }else {
                //     console.log("true")                   
                // }
            })
});
} catch (error) {
    console.log("Erorr")
}
    
},[cheng])
    

    
// رشنه یا خاموش
useEffect(()=>{
    try {
        dataValuesingel.forEach(ie => {
            axios({
                url : 'read?format=json',
                baseURL : `${ie}`,
                method : "GET",
                responseType : "json",
            
                timeout : 3000,
                
            
                ValidityState : (status) => {
                    return status >= 200 && status < 300
                }
            
                })
                
                    .then((res) => {
                        if (res.data.on == false) {
                            const data = {
                                id : i.id,
                                onoff  : false
                            }
                        UpdateOnoff(data)
                    }else{
                        const data = {
                            id : i.id,
                            onoff  : true
                        }
                        UpdateOnoff(data)
                    }
                    })             
        });  
        
    } catch (error) {
    }
    
},[cheng])

    
    
const OnOff =(data)=>{
    const urlon = data.urlon 
 if (data.onoff != true) {
 try {
     
     let arr = urlon.split('&')
     arr.forEach(i => {
         axios({
             url : 'turn-on',
             baseURL : `${i}`,
             method : "GET",
             responseType : "json",
         
             timeout : 3000,
             
         
             ValidityState : (status) => {
               return status >= 200 && status < 300
             }
         
           })
           
               .then((res) => console.log('on'))
               .catch((err) => {
                  console.log(err)
               })
         setCheng(!cheng)
     });
 } catch (error) {
     console.log("Error",error)
 }
 }else {
    try {
     let arr = urlon.split('&')
     arr.forEach(i => {
        axios({
            url : 'turn-off',
            baseURL : `${i}`,
            responseType : "json",
        
            timeout : 3000,
            
        
            ValidityState : (status) => {
              return status >= 200 && status < 300
            }
        
          })
          
              .then((res) => console.log("off"))
              .catch((err) => {            
                 console.log(err)
              })
         setCheng(!cheng)
 
     });
    } catch (error) {
        console.log("Error",error)
    }
 }
     
  }
    

     return(
            <View style={{flex : 1}}>
                <View style={{}}>
                {
                    dataValuesingel != "" ?<Text style={{fontSize : 17,fontWeight : "500",color : "#000",marginRight : "3%"}}>Single ...</Text> : <Text/>

                }
                                    <FlatList 
                                        horizontal = {false}
                                        numColumns={3}
                                        removeClippedSubviews={true}
                                        scrollEnabled={true}
                                        showsVerticalScrollIndicator= {false}
                                        showsHorizontalScrollIndicator = {false}
                                        data={dataValuesingel}
                                        keyExtractor={dataValuesingel => dataValuesingel.id}
                                        renderItem={({ item }) => {
                                            let icon = item.icon
                                            let arrIcon = icon.split("/")                           
                                            switch (arrIcon[0]) {
                                                case 'AntDesign':
                                                    var Icon = AntDesign
                                                    setCheckIcon(true)
                                                    break
                                                case 'RNIMigration':
                                                    var Icon = RNIMigration
                                                    setCheckIcon(true)
                                                    break
                                                case 'MaterialIcons':
                                                    var Icon = MaterialIcons
                                                    setCheckIcon(true)
                                                    break
                                                case 'MaterialCommunityIcons':
                                                    var Icon = MaterialCommunityIcons
                                                    setCheckIcon(true)
                                                    break
                                                case 'Ionicons':
                                                    var Icon = Ionicons
                                                    setCheckIcon(true)
                                                    break
                                                case 'Foundation':
                                                    var Icon = Foundation
                                                    setCheckIcon(true)
                                                    break
                                                case 'Fontisto':
                                                    var Icon = Fontisto
                                                    setCheckIcon(true)
                                                    break
                                                case 'FontAwesome5Pro':
                                                    var Icon = FontAwesome5Pro
                                                    setCheckIcon(true)
                                                    break
                                                case 'FontAwesome5':
                                                    var Icon = FontAwesome5
                                                    setCheckIcon(true)
                                                    break
                                                case 'FontAwesome':
                                                    var Icon = FontAwesome
                                                    setCheckIcon(true)
                                                    break
                                                case 'EvilIcons':
                                                    var Icon = EvilIcons
                                                    setCheckIcon(true)
                                                    break
                                                case 'Entypo':
                                                    var Icon = Octicons
                                                    setCheckIcon(true)
                                                    break
                                                case 'Feather':
                                                    var Icon = Feather
                                                    setCheckIcon(true)
                                                    break
                                                case 'Entypo':
                                                    var Icon = Entypo
                                                    setCheckIcon(true)
                                                    break

                                                default : 
                                                setCheckIcon(false)
                                            }
                                            return (
                                        <View style={{flex : 1,flexDirection : "row",justifyContent : "center",paddingTop : 8}}>

                                            <Pressable style={{width : "82%",alignItems : "center",height : "55%"}} onPress={()=>{
                                                const data = {
                                                id : item.id,
                                                onoff : !item.onoff
                                                }
                                                UpdateOnoff(data)
                                                const OnDataon = {
                                                onoff : item.onoff,
                                                urlon : item.urlon
                                                }

                                                OnOff(OnDataon)
                                                setCheng(!cheng)
                                                
                                                }}>

                                                <View style={styles.item}>
                                                <MenuContext style={styles.container}>

                                                    <View style={[styles.onoff,{borderColor  : item.onoff == false ? "red":"aqua"}]}>
                                                        {/* bag */}
                                                        <View style={[styles.bag,{backgroundColor : item.connected == true ? "#29ff6c" : "red"}]}/>

                                                        {
                                                            item.icon === "" ? 
                                                            
                                                                item.onoff === true ? 
                                                                <Image 
                                                                source={require('../file/image/on.png')}
                                                                style={{width : 36, height : 65,position : "absolute",left : "28%",top : "5%",opacity : 0.8}} resizeMode="cover"
                                                        />   :
                                                                    <Image 
                                                                    source={require('../file/image/off.png')}
                                                                    style={{width : 36, height : 65,position : "absolute",left : "28%",top : "5%",opacity : 0.8}} resizeMode="cover"
                                                        />

                                                        
                                                        
                                                            : 
                                                            checkIcon == true ?
                                                            <View style={{position : "absolute",top : "10%",left : "15%"}}>
                                                                <Icon  name={arrIcon[1]}  size={60} color={item.onoff != true?arrIcon[2]:arrIcon[3]}/>
                                                            </View> :  
                                                            item.onoff === true ? 
                                                                <Image 
                                                                source={require('../file/image/on.png')}
                                                                style={{width : 36, height : 65,position : "absolute",left : "28%",top : "5%",opacity : 0.8}} resizeMode="cover"
                                                        />   :
                                                                    <Image 
                                                                    source={require('../file/image/off.png')}
                                                                    style={{width : 36, height : 65,position : "absolute",left : "28%",top : "5%",opacity : 0.8}} resizeMode="cover"
                                                        />
                                                            

                                                        }
                                                        
                                                            <Text style={{position : "absolute",top : "78%",alignSelf : "center",color :"#111",fontWeight : "500"}}>{item.name}</Text>                        

                                                    </View>

                                            <Menu  style={{position : "absolute",zIndex : 0,top : "8%",right : "4%",}}>
                                                <MenuTrigger style={{width : 25,height : 25,alignSelf : "center",justifyContent : "center"}} onAlternativeAction={()=>{open}}>
                                                    <Entypo name="dots-three-vertical" color="#000" size={14}/>
                                                </MenuTrigger>

                                                <MenuOptions >
                                                    <View style={{zIndex : 1}}>
                                                        <MenuOption style={{flexDirection :"row",justifyContent : "space-between",alignSelf : "flex-end",}} 
                                                            onSelect={() => {props.navigation.navigate('Edit',{values : item })                                                        }} >
                                                            <Entypo style={{marginRight : "25%"}} name="edit" size={17} color="green"/>
                                                            <Text>Edit</Text>
                                                        </MenuOption>
                                                        <MenuOption style={{flexDirection :"row",justifyContent : "space-between",alignSelf : "flex-end",}} onSelect={() =>{    
                                                            DeleteItem(item.id)
                                                            setCheng(!cheng)}}>
                                                            <Entypo style={{marginRight : "16%"}} name="trash" size={17} color="red"/>
                                                            <Text style={{ color: 'red' }}>Delete</Text>
                                                        </MenuOption>
                                                    </View>
                                                </MenuOptions>
                                            </Menu> 
                                            </MenuContext>    
                                                </View>



                                            </Pressable>

                                        </View>
                                            )
                                        }}
                                    /> 
                </View>
            </View>
     )
 } 

 const styles = StyleSheet.create({
    text : {
         fontSize : 18,
         position : "absolute",
         right : "3%",
         fontWeight : "bold",
         color : "#111"
    },
    item : {
        width : 100,
        height : 100,
        backgroundColor : "#4d798b",
        marginLeft : 15,
        marginRight : 15, 
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "#aed9e0",
        shadowOffset: { width:10, height: 10}, 
        elevation: 8,
        shadowColor : "blue",
        shadowOpacity : 0.9,
    },
    onoff : {
        width : "90%",
        margin : 5,
        marginRight : 6,
        flex : 1,
        alignSelf : "center",
        borderRadius : 8,
        borderWidth : 1.2, 
    },
    container: {
        zIndex : 0,
        height : 100,
        width : 100,
        top  : 0,   
      },
    bag: {
    width : 4,
    height : 4,
    borderRadius : 2,
    top : 5,
    left  : 5,
},
 })
export {Singeldata}