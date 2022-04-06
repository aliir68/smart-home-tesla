import React,{useContext,useState} from "react"
import {View,Text,StyleSheet,ImageBackground,Linking,Pressable,TouchableOpacity} from "react-native"
import { Header } from '../component/Header'
import {AppContext} from '../component/contextComponent'
import Entypo from 'react-native-vector-icons/Entypo'


const confing =(props)=>{





    return(
        <View style={{flex : 1}}>
            <Header />
                <ImageBackground source={require("../file/image/backgroundasli.jpg")} blurRadius={5} 
                        style={{width: '100%', height: "100%",position : "absolute"}}
                />
               <TouchableOpacity 
               onPress={()=>{
                          Linking.openURL('https://uupload.ir/view/tesla_9xu.zip/')
                 
                }}
                    style={{width : "90%",height : 30,backgroundColor : "#0899",alignSelf :"center",marginTop : 50,borderRadius : 5,alignItems : "center",justifyContent : "center"}}>
                    <Text style={{color : "#000",fontSize : 16,fontWeight : "700",}}>دانلود آموزش پیاده سازی پروژه</Text>
               </TouchableOpacity>

        </View>
    )
}

export{confing}