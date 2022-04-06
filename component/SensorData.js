import React,{ useState,useContext,useEffect }  from 'react'
import {View , Text,StyleSheet,FlatList, ToastAndroid, ScrollView,AppState} from 'react-native'
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

// سنسور دما
// import { AnimatedCircularProgress } from 'react-native-circular-progress';


import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

  
 const SensorData = (props)=>{
    const {cheng,setCheng,dataValueSensor,DeleteItemSensor,UpdateEditSensorOnoff
            ,UpdateconnectedSensor} = useContext(AppContext)
    const [checkIcon,setCheckIcon]=useState(false)
    const [chengg,setChengg]=useState(false)



const Checkconnected =()=>{
try {
    dataValueSensor.forEach(i => {
    axios({
        url : 'read?format=json',
        baseURL : `${i.urlSensor}`,
        method : "GET",
        responseType : "json",
    
        timeout : 2000,
        
    
        ValidityState : (status) => {
            return status >= 200 && status < 300
        }
    
        })
        
            .then((res) => {
                if (res.data.connected != i.connected) {
                    if (res.data.connected != true) {         
                        ToastAndroid.show('ارتباط با سرور قطع است',ToastAndroid.LONG) 
                        const data = {
                            id : i.id,
                            connected : false
                        }
                        UpdateconnectedSensor(data)       
                    }else{
                        const data = {
                            id : i.id,
                            connected : true
                        }
                        UpdateconnectedSensor(data)                
                    }
                }

            })
            .catch((err) => {
                // console.log("----------",err)
                // if (err){
                //     ToastAndroid.show('لطفا اینترنت چک کنید',ToastAndroid.LONG)  
                    const data = {
                        id : i.id,
                        connected : false
                    }
                    Updateconnected(data)                
                // }else {
                //     console.log("true")                   
                // }
            })
});
} catch (error) {
    console.log("Erorr")
}
setCheng(!cheng)
}


const Checkonoff = () =>{
    dataValueSensor.forEach(i => {
        console.log("ali=>",i.urlSensor)
        try {
            axios({
                url : 'read?format=json',
                baseURL : `${i.urlSensor}`,
                method : "GET",
                responseType : "json",
            
                timeout : 3000,

                ValidityState : (status) => {
                return status >= 200 && status < 300
                }
            })
            
                .then((res) => {
                    if (res.data.hi != i.onoff) {
                        if (res.data.hi == true) {
                            const data = {
                                id : i.id,
                                onOff : true
                            }
                            UpdateEditSensorOnoff(data)
                            console.log("on")

                        }else{
                            const data = {
                                id : i.id,
                                onOff : false
                            }
                            UpdateEditSensorOnoff(data)
                            console.log("off")

                        }
                    }

                })
                .catch((err) => {
                })             
        } catch (error) {
            console.log("Eroooor")
        }
    })
}

useEffect(()=>{
    Checkonoff()
    Checkconnected()
} ,[chengg])


// if (dataValueSensor.length != 0) {
//     setTimeout(()=>{
//         setChengg(!chengg)
//     }, 5000)
// }






     return(

         <View style={{flex :1 }}>
             <View style={{}}>
                 {
                     dataValueSensor != "" ?<Text style={{fontSize : 17,fontWeight : "500",color : "#111",marginRight : "3%"}}>Sensor...</Text> : <Text/>
                 }

                 {/* دما رطوبت */}
                  {/* <View style={{flex : 1,zIndex : 1}}>
                 <FlatList 
                        horizontal={true}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator= {false}
                        showsHorizontalScrollIndicator = {false}
                        data={dataValueSensorTemp}
                        keyExtractor={dataValueSensorTemp => dataValueSensorTemp.id}
                        renderItem={({ item }) => {
                            let icon = item.iconSeonsorTemp
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
                            // console.log("item",item)
                            return(
                                <View>
                                    <MenuContext style={styles.containerTemp}>   
                                     <AnimatedCircularProgress
                                        size={180}
                                        width={10}
                                        fill={item.onoffSensorTemp}
                                        tintColor="aqua"
                                        backgroundColor="#3d5875"
                                        backgroundWidth={4}
                                        rotation={270-0}
                                        lineCap="round"
                                        arcSweepAngle={360-176}
                                        padding={10}
                                        // dashedTint={{width: 1, gap: 8 }}
                                        prefill={10}
                                        duration={2000}
                                        tintColorSecondary="red"
                                        tintTransparency= {true}
                                        style={{}}
                                   />
                                   <Text style={{fontSize : 17,fontWeight : "700",alignSelf : "center",top : "45%",position :"absolute",justifyContent : "space-between"}}>{item.nameSensorTemp}</Text>

                                   {
                                       item.iconSeonsorTemp != "" ? <Icon style={{top : "28%",left : "42%",position :"absolute"}}  name={arrIcon[1]}  size={32} color="#f4ce67"/> :
                                       <MaterialCommunityIcons style={{top : "28%",left : "42%",position :"absolute"}}  name="coolant-temperature"  size={30} color="#f4ce67"/>
                                   }

                                            <Menu  style={{position : "absolute",zIndex : 0,top : "3%",right : "4%",}}>
                                                <MenuTrigger style={{width : 25,height : 25,alignSelf : "center",justifyContent : "center"}} >
                                                    <Entypo name="dots-three-vertical" color="#000" size={14}/>
                                                </MenuTrigger>

                                                <MenuOptions optionWrapper={{backgroundColor :"red"}} style={{alignSelf : "center",zIndex : 0}}>
                                                        <MenuOption  style={{flexDirection :"row",justifyContent : "space-between",}} 
                                                            onSelect={() => {props.navigation.navigate('EditSensorTemp',{values : item })}}>
                                                            <Entypo style={{marginRight : "25%"}} name="edit" size={17} color="green"/>
                                                            <Text>Edit</Text>
                                                        </MenuOption>
                                                        <MenuOption style={{flexDirection :"row",justifyContent : "space-between",padding : 5}} onSelect={() => {
                                                            DeleteItemSensorTemp(item.id)
                                                            setCheng(!cheng)}} 
                                                            >
                                                            <Entypo style={{marginRight : "0%"}} name="trash" size={17} color="red"/>
                                                            <Text style={{ color: 'red' }}>Delete</Text>
                                                        </MenuOption>
                                                </MenuOptions>
                                            </Menu> 
                                        </MenuContext>   
                                </View>
                           
                           )
                        }}
                    />
                    </View> */}

                <View style={{flex : 1,marginBottom : 55}}>
                <ScrollView   style={{width : "100%",height : 200,marginTop : 10,zIndex :0,marginTop : "1%",overflow : "scroll",}}>        
                <FlatList 
                        horizontal={false}
                        numColumns={3}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator= {false}
                        showsHorizontalScrollIndicator = {false}
                        data={dataValueSensor}
                        keyExtractor={dataValueSensor => dataValueSensor.id}
                        renderItem={({ item }) => {                          
                            let icon = item.iconSeonsor
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
                              <View style={{flex : 1,marginTop : "2.5%",marginLeft : "7%"}}>
                             <MenuContext style={styles.container}>
                                  <View style={styles.item}>

                                        <View style={[styles.bag,{backgroundColor : item.onoff == true ? "aqua" : "red"}]}/>
                                        <Text style={styles.name}>{item.nameSensor}</Text>
                                         {/* bag */}
                                         <View style={[styles.bagConnected,{backgroundColor : item.connected == true ? "#29ff6c" : "red"}]}/>

                                        <View style={{position : "absolute",top : "23%",alignSelf : "center",}}>
                                            {
                                                item.iconSeonsor == "" ? 
                                                    item.onoff == true ? <Fontisto name="checkbox-active" size={20} color="#f4ce67"/> :
                                                        <Fontisto name="checkbox-passive" size={20} color="#f4ce67"/> : 
                                                            item.onoff == true ? 
                                                                <Icon name={arrIcon[1]} size={22} color="#f4ce67"/> : 
                                                                <Icon name={arrIcon[2]} size={22} color="#f4ce67"/>
                                            }
                                            
                                        </View> 

                                        <Menu style={{position : "absolute",top : "-2%",right : "-2%"}}>
                                                <MenuTrigger style={{width : 25,height : 25,alignSelf : "center",justifyContent : "center"}} onAlternativeAction={()=>{open}}>
                                                    <Entypo name="dots-three-vertical" color="#000" size={14}/>
                                                </MenuTrigger>

                                                <MenuOptions style={{zIndex : 1}}>
                                                    <View style={{zIndex : 1}}>
                                                        <MenuOption style={{flexDirection :"row",alignSelf : "flex-end"}} 
                                                            onSelect={() =>{props.navigation.navigate('EditSensor',{values : item })}} >
                                                            <Entypo style={{marginRight : "25%"}} name="edit" size={17} color="green"/>
                                                            <Text>Edit</Text>
                                                        </MenuOption>
                                                        <MenuOption style={{height : 27,flexDirection :"row",justifyContent : "space-between",alignSelf : "flex-end",}} onSelect={() =>{    
                                                            DeleteItemSensor(item.id)
                                                            setCheng(!cheng)}}>
                                                            <Entypo style={{marginRight : "17%"}} name="trash" size={17} color="red"/>
                                                            <Text style={{ color: 'red'}}>Delete</Text>
                                                        </MenuOption>
                                                    </View>
                                                </MenuOptions>

                                            </Menu>   

                                  </View>    
                                  </MenuContext>    
                              </View>  
                           
                            )
                        }}
                    />     
                      
                      </ScrollView>            
                </View>                                       

             </View>   

         </View>
                 
     )
 }  
 const styles = StyleSheet.create({
     bag : {
         width : "70%",
         height : "4%",
         alignSelf : "center",
         position : "absolute",
         top : "8%",
         bottom : 5,
         borderRadius : 10
        },
    name : {
        position : "absolute",
        top : "65%",
        color : "#000",
        fontWeight : "600",
        fontSize : 13,
        alignSelf : "center"
    },
    item : {
        width : 75,
        height :50,
        backgroundColor :"#4d798b",
        borderRadius : 5,
        overflow :"hidden",
        borderWidth : 1,
        borderColor : "#aed9e0",
        shadowOffset: { width:2, height: 5}, 
        elevation: 15,
        shadowColor : "blue",
    },
    container: {
        zIndex : 0,
        height : 65,
        width : 70,
        top  : -8,
      },

    containerTemp: {
    zIndex : 0,
    height : "100%",
    width : "100%",
    top  : 0,
    },
   bagConnected: {
        width : 4,
        height : 4,
        borderRadius : 2,
        top : 2.5,
        left  : 2,
    },
 })
export {SensorData}