import React,{useContext,useState,useEffect} from 'react'
import {View , Text, Pressable,StyleSheet, ImageBackground, TextInput} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { AppContext } from '../component'
import { WebView } from 'react-native-webview';
import Toast from 'react-native-toast-message'

 const EditSensorTemp = (props)=>{
    const{cheng,setCheng,UpdateEditSensorTemp}=useContext(AppContext)
    const [webview,setWebview]=useState(false)
    const [nameSensorTemp,setNameSensorTemp]=useState(props.route.params.values.nameSensorTemp)
    const [iconSensorTemp,setIconSensorTemp]=useState(props.route.params.values.iconSeonsorTemp)
    const [urlSensorTemp,setUrlSensorTemp]=useState(props.route.params.values.urlSensorTemp)
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
        if (iconSensorTemp != "") {
            let arr = iconSensorTemp.split("/")
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
     },[iconSensorTemp])

const showToast = (data) => {
    console.log(data)
    Toast.show({
    type: `${data.type}`,
    text1: `${data.text1}`,
    text2: `${data.text2}`,
    position : "bottom",
    bottomOffset :700,
    });
    
}


     return(
        <View style={{flex : 8}}> 
        <ImageBackground  source={require('../file/image/backgroundasli.png')} 
            resizeMode="cover" style={{width : "100%",height :"100%",position : "absolute"}} blurRadius={1}/>
            <Pressable style={{position :"absolute",top : "3%",left : "8%",}}
                onPress={()=>{props.navigation.navigate('Home')}}>
                  <Entypo  name="back" color="#FFF" size={30}/>
            </Pressable>    

            <View style={{zIndex : 1,position : "relative",top : "18%"}}>
                <TextInput placeholder="name" placeholderTextColor="#fff" color="#fff" style={styles.TextInput} value={nameSensorTemp} onChangeText={(value) =>nameChenged(value)}/>
                <TextInput scrollEnabled={true}  placeholder="titel / name " placeholderTextColor="#fff" color="#fff" style={[styles.TextInput,{paddingLeft: 40}]}  value={iconSensorTemp} onChangeText={(value) =>iconChenged(value)}/>
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
                        <WebView  style={{width : "100%",height :"100%",zIndex : 1,}} 
                            source={{ uri: 'https://oblador.github.io/react-native-vector-icons/' }} /> 
                            <TextInput scrollEnabled placeholder="titel / name " backgroundColor="#888" placeholderTextColor="#fff" color="#fff" style={{paddingLeft: 55}} value={iconSensorTemp} onChangeText={(value) =>iconChenged(value)}/>
                            <Pressable onPress={()=>{setWebview(false)}}
                                style={styles.bottomWebView}>
                                <Text style={{alignSelf : "center",color : "#FFF",fontSize : 20}}>ok</Text>
                            </Pressable>
                    </View> : <View/>
                    
                    } 
            <Pressable  style={styles.bottom}
                onPress={()=>{
                    const data = {
                        id : props.route.params.values.id,
                        nameSensorTemp : nameSensorTemp,
                        iconSensorTemp : iconSensorTemp,
                        urlSensorTemp : urlSensorTemp
                    }

                    if (urlSensorTemp != "" && checkIcon == true ){
                    UpdateEditSensorTemp(data)
                    setCheng(!cheng)
                    props.navigation.navigate('Home')
                    }else{
                    const data={type : "error",text1 : "مقادیر اشتباه",text2 : " 1)عنوان ایکون اشتباه است 2) url را وادر کنید"}
                    showToast(data)
                }
                }}  
                >
                <View >
                    <Entypo name="download" size={30} color="#111"/>
                </View>
            </Pressable>
            <Toast/>

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
   },
   bottom : {
       width : "80%",
       height : "5%",
       backgroundColor : "#b2ebe0",
       borderRadius : 7,
       alignSelf : "center",
       position : "relative",
       top : "35%",
       alignItems : "center",
       justifyContent :"center",
       
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
    fontSize : 15,
    color:"red",
    fontWeight : "800",
    position : "absolute",
    top : "57%",
    left : "5%"
}
   })

export {EditSensorTemp}