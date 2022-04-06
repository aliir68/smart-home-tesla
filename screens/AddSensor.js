import React,{useContext,useState,useEffect} from 'react'
import {View , Text, Pressable,StyleSheet, ImageBackground, TextInput,TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { AppContext } from '../component'
import { WebView } from 'react-native-webview';
import Toast from 'react-native-toast-message'
import { Header } from '../component/Header';

 const AddSensor = (props)=>{
const{nameSensor,urlSensor,iconSeonsor,setNameSensor,setIconSensor,
            setUrlSensor,TodoSubmittiingSensor,cheng,setCheng,active}=useContext(AppContext)
const [webview,setWebview]=useState(false)
const [checkIcon,setCheckIcon]=useState(false)
const [activeShow,setActiveShow]=useState(false)

const nameChenged = (value)=>{
    setNameSensor(value)
}
const urlonChenged = (value)=>{
    setUrlSensor(value)
}


const iconChenged = (value)=>{
        setIconSensor(value)    
         
}

const AlertActive = ()=> {
    return(
        <View style={{position : "absolute",top : "40%",left : 60,right : 0,bottom : 10,zIndex : 1}}>
            <View style={{width : "80%", height : "30%", backgroundColor :"#fff",borderRadius : 10}}>
                <View style={{flexDirection : "row",justifyContent : "space-between"}}>
                    <Text style={{fontSize : 25,color : "#111",marginTop : 5,marginLeft : 10}}>ارتقا</Text>
                    <Pressable onPress={()=>{setActiveShow(false)}}>
                         <Entypo name="cross" color ="red" size={40}/>
                    </Pressable>
                </View>
                <View style={{margin : 10,justifyContent : "space-between",flex : 1 ,}}>
                    <Text style={{marginTop : 10,color : "#000",fontSize : 20}}>لطفا حساب خود را ارتقا دهید</Text>
                    <TouchableOpacity style={{width : "90%",height : 30,backgroundColor : "green",alignSelf :"center",borderRadius : 5,justifyContent : "center"}}>
                            <Text style={{alignSelf : "center",color : "#fff",fontSize : 18}}> 7,000 تومان</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    }

useEffect(()=>{
   if (iconSeonsor != "") {
    let arr =iconSeonsor.split("/")
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
},[iconSeonsor])

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
setIconSensor('')
setNameSensor('')
setUrlSensor('')
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
                     style={[styles.itemNavigate,{opacity : 0.9}]}>
                <View >
                    <Text style={{color : "#FFF",fontSize : 18,fontWeight :"bold"}}>Sensor</Text>
                </View>
                </Pressable>
                {/* <Pressable onPress={()=>{props.navigation.navigate('AddSensorTemp')}}
                     style={[styles.itemNavigate]}>
                <View >
                    <Text style={{color : "#FFF",fontSize : 18,fontWeight :"bold"}}>Temp</Text>
                </View>
                </Pressable> */}
            </View>               

            <View style={{zIndex : 1,position : "relative",top : "18%"}}>
                <TextInput placeholder="name" placeholderTextColor="#fff" color="#fff" style={styles.TextInput} value={nameSensor} onChangeText={(value) =>nameChenged(value)}/>
                <TextInput placeholder="titel / nameOn / nameOff " placeholderTextColor="#fff" color="#fff" style={styles.TextInput}  value={iconSeonsor} onChangeText={(value) =>iconChenged(value)}/>
               {
                   checkIcon ==  false?<Text style={styles.textErorr}>عنوان اشتباه است</Text> : <Text style={styles.textErorr}></Text> 
    
               }
                <Pressable style={{zIndex : 1,top : "-14%",right : "85%"}} 
                    onPress={()=>{setWebview(true)}}>
                        <Entypo  name="open-book" color="#FFF" size={25}/>
                </Pressable>
               
                <TextInput  multiline={true} numberOfLines={3} placeholder="url"  placeholderTextColor="#fff" color="#fff" style={styles.TextInput} value={urlSensor}  onChangeText={(value) =>urlonChenged(value)}/>
            </View>    
                {                    
                webview == true ?
                    <View style={styles.webview}>
                        <WebView style={{width : "100%",height :"100%",zIndex : 1,}} 
                            source={{ uri: 'https://oblador.github.io/react-native-vector-icons/' }} /> 
                            <TextInput placeholder="titel / nameOn / nameOff " backgroundColor="#888" placeholderTextColor="#fff" color="#fff" value={iconSeonsor} onChangeText={(value) =>iconChenged(value)}/>
                            <Pressable onPress={()=>{setWebview(false)}}
                                style={styles.bottomWebView}>
                                <Text style={{alignSelf : "center",color : "#FFF",fontSize : 20}}>ok</Text>
                            </Pressable>
                    </View> : <View/>
                    
                    } 
        <View style={{position : "relative",top : "45%",flexDirection  :"row",justifyContent : "space-around"}}>
                <Pressable  style={styles.bottom}
                    onPress={()=>{
                        setActiveShow(true)
                if (urlSensor !=""&&checkIcon==true ) {
                        TodoSubmittiingSensor()
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
            {
                    active != true && activeShow == true ?
                     <AlertActive/> : <View/>

                }
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
    backgroundColor : "#8131"
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
    paddingLeft :  30,
    paddingRight : 30,
    backgroundColor :"#b2ebe0",
    marginLeft : "6%",
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


export {AddSensor}