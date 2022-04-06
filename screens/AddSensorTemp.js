import React,{useContext,useState,useEffect} from 'react'
import {View , Text, Pressable,StyleSheet, ImageBackground, TextInput} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { AppContext } from '../component'
import { WebView } from 'react-native-webview';
import Toast from 'react-native-toast-message'
import { Header } from '../component/Header';

 const AddSensorTemp = (props)=>{
const{nameSensorTemp,urlSensorTemp,iconSeonsorTemp,setNameSensorTemp,setIconSensorTemp,setUrlSensorTemp,TodoSubmittiingSensorTemp,cheng,setCheng}=useContext(AppContext)
const [webview,setWebview]=useState(false)
const [checkIcon,setCheckIcon]=useState(false)

const nameChenged = (value)=>{
    setNameSensorTemp(value)
}
const urlonChenged = (value)=>{
    setUrlSensorTemp(value)
}


const iconChenged = (value)=>{
        setIconSensorTemp(value)    
         
}

useEffect(()=>{
   if (iconSeonsorTemp != "") {
    let arr =iconSeonsorTemp.split("/")
        switch (arr[0]) {
            case 'AntDesign':
                setCheckIcon(true)
                break
            case 'RNIMigration':
                setCheckIcon(true)
                break
            case 'MaterialIcons':
                setCheckIcon(true)
                break
            case 'MaterialCommunityIcons':
                setCheckIcon(true)
                break
            case 'Ionicons':
                setCheckIcon(true)
                break
            case 'Foundation':
                setCheckIcon(true)
                break
            case 'Fontisto':
                setCheckIcon(true)
                break
            case 'FontAwesome5Pro':
                setCheckIcon(true)
                break
            case 'FontAwesome5':
                setCheckIcon(true)
                break
            case 'FontAwesome':
                setCheckIcon(true)
                break
            case 'EvilIcons':
                setCheckIcon(true)
                break
            case 'Entypo':
                setCheckIcon(true)
                break
            case 'Feather':
                setCheckIcon(true)
                break
            case 'Entypo':
                setCheckIcon(true)
                break
        
            default : 
            setCheckIcon(false)
        
        }
   }else{
    setCheckIcon(true)
   }
},[iconSeonsorTemp])

const showToast = (data) => {
    Toast.show({
    type: `${data.type}`,
    text1: `${data.text1}`,
    text2: `${data.text2}`,
    position : "bottom",
    bottomOffset :100,
    });
    
}

useEffect(()=>{
setIconSensorTemp('')
setNameSensorTemp('')
setUrlSensorTemp('')
}, [cheng])
return(
    <View style={{flex : 8}}> 
        <ImageBackground  source={require('../file/image/backgroundasli.jpg')} 
            resizeMode="cover" style={{width : "100%",height :"100%",position : "absolute"}} blurRadius={0}/>
                 <Header/>
            <View style={styles.navigate}>       
                <Pressable onPress={()=>{props.navigation.navigate('Add')}}
                    style={[styles.itemNavigate]}>
                        <View >
                            <Text style={{color : "#FFF",fontSize : 18,fontWeight :"bold"}}>On/Off</Text>
                        </View>
                </Pressable>
                <Pressable onPress={()=>{props.navigation.navigate('AddSensor')}}
                     style={styles.itemNavigate}>
                <View >
                    <Text style={{color : "#FFF",fontSize : 18,fontWeight :"bold"}}>Sensor</Text>
                </View>
                </Pressable>
                <Pressable onPress={()=>{props.navigation.navigate('AddSensorTemp')}}
                     style={[styles.itemNavigate,{opacity : 0.9}]}>
                <View >
                    <Text style={{color : "#FFF",fontSize : 18,fontWeight :"bold"}}>Temp</Text>
                </View>
                </Pressable>
            </View>               

            <View style={{zIndex : 1,position : "relative",top : "18%"}}>
                <TextInput placeholder="name" placeholderTextColor="#fff" color="#fff" style={styles.TextInput} value={nameSensorTemp} onChangeText={(value) =>nameChenged(value)}/>
                <TextInput placeholder="titel / name /" placeholderTextColor="#fff" color="#fff" style={styles.TextInput}  value={iconSeonsorTemp} onChangeText={(value) =>iconChenged(value)}/>
               {
                   checkIcon ==  false?<Text style={styles.textErorr}>عنوان اشتباه است</Text> : <Text style={styles.textErorr}></Text> 
    
               }
                <Pressable style={{zIndex : 1,top : "-14%",right : "85%"}} 
                    onPress={()=>{setWebview(true)}}>
                        <Entypo  name="open-book" color="#FFF" size={25}/>
                </Pressable>
               
                <TextInput  multiline={true} numberOfLines={3} placeholder="url"  placeholderTextColor="#fff" color="#fff" style={styles.TextInput} value={urlSensorTemp}  onChangeText={(value) =>urlonChenged(value)}/>
            </View>    
                {                    
                webview == true ?
                    <View style={styles.webview}>
                        <WebView style={{width : "100%",height :"100%",zIndex : 1,}} 
                            source={{ uri: 'https://oblador.github.io/react-native-vector-icons/' }} /> 
                            <TextInput placeholder="titel / name " backgroundColor="#888" placeholderTextColor="#fff" color="#fff" value={iconSeonsorTemp} onChangeText={(value) =>iconChenged(value)}/>
                            <Pressable onPress={()=>{setWebview(false)}}
                                style={styles.bottomWebView}>
                                <Text style={{alignSelf : "center",color : "#FFF",fontSize : 20}}>ok</Text>
                            </Pressable>
                    </View> : <View/>
                    
                    } 
        <View style={{position : "relative",top : "45%",flexDirection  :"row",justifyContent : "space-around"}}>
                <Pressable  style={styles.bottom}
                    onPress={()=>{
                if (urlSensorTemp !=""&&checkIcon==true ) {
                        TodoSubmittiingSensorTemp()
                        setCheng(!cheng)
                        props.navigation.navigate('Home')
                    
                }else{
                    const data={type : "error",text1 : "مقادیر اشتباه",text2 : " 1)عنوان ایکون اشتباه است 2) url را وادر کنید"}
                    showToast(data)}
                    }}   
                    >
                    <View >
                        {/* <Entypo name="download" size={30} color="#111"/> */}
                        <Text style={{fontSize : 18,color :"#000",fontWeight : "800"}}>OK</Text>

                    </View>
                </Pressable>
                <Pressable onPress={()=>{props.navigation.navigate('link')}}
                     style={styles.bottom}>
                    <Text style={{fontSize : 18,color :"#000",fontWeight : "400"}}>LINK</Text>
                </Pressable>
            </View>
        <Toast />
    </View>
    )
 } 
 const styles = StyleSheet.create({
 TextInput :{
    borderWidth : 4,
    width : "90%",
    borderColor : "#D8eCE9",
    marginLeft: "5%",
    marginTop : "5%",
    padding : 10,
    backgroundColor :"#8131"
},
bottom : {
    width : "40%",
    height : 33,
    backgroundColor : "#b2ebe0",
    borderRadius : 7,
    alignSelf : "center",
    alignItems : "center",
    justifyContent :"center",
    
},
itemNavigate : {
    borderWidth : 2,
    borderColor :"#c3e4fd",
    paddingTop : 5,
    paddingBottom : 5,
    paddingLeft :  20,
    paddingRight : 20,
    backgroundColor :"#b2ebe0",
    marginLeft : "1%",
    opacity : 0.5
},
navigate :{
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    position : "absolute",
    top : "17%",
    left : "12%"
   
},
webview : {
    position :"absolute",
    top :"5%",
    left : "10%" ,
    width : "80%",
    height :"80%",
    zIndex : 1,
    borderWidth : 4,
    borderColor :"#999",
},
bottomWebView : {
    width : 40,
    height : 40,
    backgroundColor  :"#9575B0",
    position : "absolute",
    bottom : 3,
    left : 5,
    borderRadius : 10,
    justifyContent : "center",
    alignContent : "center"
},
textErorr : {
    fontSize : 17,
    color:"red",
    fontWeight : "800",
    position : "absolute",
    top : "57%",
    left : "5%"
}
})


export {AddSensorTemp}