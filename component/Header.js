import React from 'react'
import {View , Text,StyleSheet,ImageBackground, StatusBar,TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

 const Header = (props)=>{
return(
    <View style={{borderRadius : 50,width : "100%",height : "10%",zIndex :1 }}>
                <StatusBar backgroundColor="#5599ae" barStyle="dark-content" />   
                <ImageBackground source={require("../file/image/222.jpg")} blurRadius={0.5} 
                    style={{width: '100%', height: 80,flexDirection : "row",justifyContent : "space-between"}} imageStyle={{borderBottomLeftRadius : 20,borderBottomRightRadius : 20}}>
                    <Text style={{fontSize : 25,color:"#fff",marginTop : "8%",position : "absolute",right : "40%"}}>TESLA</Text>
                </ImageBackground>
                    

    </View>
    )
 } 
 const styles = StyleSheet.create({
 
})

export {Header}