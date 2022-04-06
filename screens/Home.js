import React,{ useState,useContext,useEffect } from 'react'
import {View,Text,StyleSheet,Pressable,Image,FlatList, ImageBackground,TouchableOpacity} from 'react-native'
import {Header} from "../component"
import Entypo from "react-native-vector-icons/Entypo"
import {AppContext,Singeldata,SensorData} from '../component'
import axios from 'axios';
import PTRView from 'react-native-pull-to-refresh';

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
import SplashScreen from 'react-native-splash-screen'
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';


import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';



//   import remoteConfig from '@react-native-firebase/remote-config';
  



const Home = (props)=>{
    const {dataValue,UpdateOnoff,cheng,setCheng,DeleteItem,dataValueGroop,dataValueSensor,active,Activation} = useContext(AppContext)
    const [checkIcon,setCheckIcon]=useState(false)


     
//     remoteConfig()
//     .setDefaults({
//          ali_data: false,
//     })
//     .then(() => remoteConfig().fetchAndActivate())
//     .then(fetchedRemotely => {});
 

//     const alidata = remoteConfig().getBoolean('ali_data');
//         console.log("alidata",alidata)
// if (alidata == true) {
//     console.log("rum")
// }

        // console.log(alidata.value == true ? "run" : "sss")


console.log(active)

useEffect(()=>{
    SplashScreen.hide();

    messaging().onMessage(async remoteMessage => {
        const data = remoteMessage.notification.body

        PushNotification.localNotification({
            channelId : "1234",
            title : "ali",
            message : data,
            userInfo : {},
            playSound : true,
            soundName : "defaulte"
        })
    })

}, [])

// // رشنه یا خاموش
useEffect(()=>{
 try {
    dataValue.forEach(i => {
        const urlon = i.urlon 
        var arrchek = urlon.split('&') 
        arrchek.push(...arrchek,i.urlon)
        arrchek.forEach(ie => {
            axios({
                url : 'read?format=json',
                baseURL : `${ie}`,
                method : "GET",
                responseType : "json",
            
                timeout : 2000,
                
            
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
            url : '/turn-on',
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
           url : '/turn-off',
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


var top = "0"
if (dataValueSensor.length == 0 ) {
    var top = "-68"
}else if (dataValueSensor.length <= 3 ) {
    var top = "-45"
}else if (dataValueSensor.length <= 6 && dataValueSensor.length >= 3 ) {
    var top = "-25"
}else if (dataValueSensor.length >= 6) {
    var top = "-10"
}
console.log(  )
return(
    <View style={{flex :1,backgroundColor : "#fbfbfbf2"}}>   
    <ImageBackground source={require("../file/image/backgroundasli.jpg")} blurRadius={5} 
            style={{width: '100%', height: "100%",position : "absolute"}}

    />
            <Header {...props}/>          

        <PTRView  style={{flex : 1}} onRefresh={()=>{setCheng(!cheng)}} >
            <View style={{flex :1}}>
                <View>
                    <SensorData  {...props}/>
                </View>
                {
                // dataValueGroop != "" ? <Text style={{fontSize : 17,fontWeight : "500",color : "#000",marginRight : "3%",top   : SensorData.length != 0 ? Number(top) + -210 :Number(top) + -50  }}>Group ...</Text> : <Text/>
            }
            <FlatList style={{marginTop : top + "%" }}
                horizontal
                removeClippedSubviews={true}
                scrollEnabled={true}
                showsVerticalScrollIndicator= {false}
                showsHorizontalScrollIndicator = {false}
                data={dataValueGroop}
                keyExtractor={dataValueGroop => dataValueGroop.id}
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
                        item.name != '' ? 
                        <View style={{flex : 1,flexDirection : "row",justifyContent : "center"}}>
                        <Pressable style={{width : "82%",alignItems : "center",height : "15%",}} onPress={()=>{
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
                            <MenuContext  style={styles.container}>

                            <View style={styles.item}>
                                <View style={[styles.onoff,{borderColor  : item.onoff == false ? "red":"aqua"}]}>
                                

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
                                                    onSelect={() => {props.navigation.navigate('Edit',{values : item })}} >
                                                    <Entypo style={{marginRight : "38%"}} name="edit" size={17} color="green"/>
                                                    <Text>Edit</Text>
                                                </MenuOption>
                                                <MenuOption style={{flexDirection :"row",justifyContent : "space-between",alignSelf : "flex-end",}} 
                                                onSelect={() =>{    
                                                    DeleteItem(item.id)
                                                    setCheng(!cheng)}}>
                                                    <Entypo style={{marginRight : "30%"}} name="trash" size={17} color="red"/>
                                                    <Text style={{ color: 'red' }}>Delete</Text>
                                                </MenuOption>
                                            </View>
                                        </MenuOptions>
                                    </Menu> 

                            </View>
                            </MenuContext>

                        </Pressable>
                    </View> : <View/>
                    )
                }}
            />     
            <Singeldata {...props}/>
            </View>

    
        </PTRView>

</View>
)
 } 
 const styles = StyleSheet.create({
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
        elevation: 9,
        shadowColor : "#000",
    },
    onoff : {
        width : "90%",
        margin : 5,
        flex : 1,
        alignSelf : "center",
        borderRadius : 8,
        borderWidth : 1.2
    },
    options : {
        width : "80%",
        height : "90%",
        backgroundColor : "#f5ffff",
        position : "absolute",
        right : "35%",
        top : "20%",
        borderRadius : 5,
        borderWidth : 1,
        borderColor : "#333"
    },
    itemOptions : {
        flexDirection : "row-reverse",
        justifyContent : "space-between",
        margin : 5,
        paddingBottom : 1
    },

    container: {
        zIndex : 0
 
    
      },

 })
export {Home}