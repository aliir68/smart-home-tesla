import React,{useState,useEffect} from 'react'
import { Header } from '../component/Header'
import {View , Text,StyleSheet,ImageBackground, Pressable, TextInput,FlatList,TouchableOpacity, ToastAndroid} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-community/clipboard';

 const link = (props)=>{
    const [showplus,setShowplus]=useState(false)
    const [valuelink,setValuelink]=useState('')
    const [name,setName]=useState('')
    const [item,setItem]=useState([])
    const [cheng,setCheng]=useState(false)

const  handleText=(value)=>{
    setValuelink(value)
}

const  handlername=(value)=>{
    setName(value)
}

useEffect(() => {
    const current = async () => {
    const value = await AsyncStorage.getItem('link')
    if (value != null)
        setItem(JSON.parse(value))
    }
    current()

    }, [])

const  setlink = async (value,name) =>{
    try {
        if (value !="") {
        const lint= [...item,[value,name]]
        setItem([...lint]);
        await AsyncStorage.setItem('link',JSON.stringify(lint) )
        }else(
            alert('مقداری وارد کنید')
        )
        } catch (error) {
            console.log(error)
        }
    }

    const Delete =(value)=>{
    console.log(value +1)
    let newitem = item.splice(value,1)
    
    AsyncStorage.setItem('link',JSON.stringify(item) )
    setCheng(!cheng)
    }

const ShowTost =()=>{
    ToastAndroid.show('لینک کپی شد',ToastAndroid.LONG)
}
     return(
         <View style={{flex : 1}}>
             <Header/>
              <ImageBackground source={require("../file/image/backgroundasli.jpg")} blurRadius={5} 
                    style={{width: '100%', height: "100%",position : "absolute"}}
            />

            <View style={{flex : 1}}>
               <FlatList   style={{flex  : 1}} 
                        showsVerticalScrollIndicator= {false}
                        showsHorizontalScrollIndicator = {false}
                        data={item}
                        keyExtractor={index => index}
                        renderItem={({ item,index }) => {
                            return(
                                <TouchableOpacity style={styles.text} onPress={() => {
                                    Clipboard.setString(item[0])
                                    ShowTost()
                                    props.navigation.navigate('Add')}}>
                                    <Text style={[styles.text,{marginRight : 20,padding : 0,marginTop : -5,fontSize : 14,marginLeft : 20,color : "#fff"}]}>{index + 1}) {item[1]}</Text>
                                    <View style={styles.item}>
                                          <Text style={styles.text}>{item[0]}</Text>
                                        <View style={{alignItems  :"center",justifyContent : "center",marginLeft : 5}}>
                                            <TouchableOpacity  onPress={()=>{Delete(index)}}
                                                style={{zIndex : 1}}>
                                                    <MaterialCommunityIcons  name="delete-outline" size={30} color="red"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )
                        }}

                />

                <Pressable  onPress={()=>{setShowplus(!showplus)}}
                    style={styles.bottom} >
                        <AntDesign name="plus" size={25} color="#fff"/>
                </Pressable>
                {
                    showplus == true ? 
                        <View style={styles.showplus}>
                            <View style={styles.header_showplus}>
                                <Text style={{fontSize : 18,fontWeight : "600", color: "#fff",marginRight : 10}}>Add link</Text>
                                <Pressable onPress={()=>{setShowplus(false)}}>
                                   <AntDesign style={{marginLeft : 10}} name="close" size={25} color="red"/>
                                </Pressable>
                            </View>

                            <View style={{justifyContent :"space-around"}}>
                                <TextInput placeholder="name" placeholderTextColor="#fff" style={[styles.text_showplus,{height : "20%"}]} color="#fff" value={name} onChangeText={(value)=>{handlername(value)}}/>
                                <TextInput placeholder="LINK" placeholderTextColor="#fff" style={styles.text_showplus} color="#fff" value={valuelink} onChangeText={(value)=>{handleText(value)}}/>
                                    <Pressable onPress={()=>{setlink(valuelink,name),setValuelink(""),setName("")}}
                                        style={styles.bottom_showplus}>
                                        <AntDesign style={{marginLeft : 10,alignSelf :  "center"}} name="downcircle" size={30} color="#444"/>
                                    </Pressable>
                            </View>
                        </View> : <View/>
                }


            </View>
         </View>
     )
 } 
 const styles = StyleSheet.create({
   bottom : {
    width : 70,
    height : 70,
    borderRadius : 50,
    backgroundColor : "#598",
    position : "absolute",
    bottom : "8%",
    left : "10%",
    alignItems :"center",
    justifyContent : "center",
    borderWidth : 1,
    borderColor : "#111",
    shadowOffset : {width : 10,height : 10},
    shadowColor : "#000",
    elevation : 10
   },
   showplus :{
       position : "absolute",
        backgroundColor : "#1444",
        width : "80%",
        height : 300,
        borderRadius : 10,
        alignSelf : "center",
        justifyContent : "space-between",
        marginTop : "30%",
        borderWidth : 2,
        borderColor : "#3336"
   },
   header_showplus : {
    flexDirection : "row-reverse",
    justifyContent : "space-between",
    backgroundColor : "#1447",
    width : "100%",
    height : "18%",
    borderBottomLeftRadius : 8,
    borderBottomRightRadius : 8,
    alignItems : "center"
   },
   header_showplus : {
    flexDirection : "row-reverse",
    justifyContent : "space-between",
    backgroundColor : "#1447",
    width : "100%",
    height : "18%",
    borderBottomLeftRadius : 8,
    borderBottomRightRadius : 8,
    alignItems : "center"
   },
   text_showplus : {
       backgroundColor : "#1448",
       width : "95%",
       height :"40%",
       alignSelf : "center",
       borderRadius : 8
    },
    bottom_showplus : {
        backgroundColor : "aqua",
        width : "95%",
        height : "20%",
        alignSelf : "center",
        borderRadius : 7,
        marginBottom : 8,
        justifyContent : "center"
    },
    item : {
        width : "90%",
        height : 40,
        backgroundColor : "#4595",
        margin : 5,
        alignSelf : "center",
        borderRadius : 4  ,
        borderWidth : 2,
        borderColor :"#1117" ,
        flexDirection :"row-reverse",
        justifyContent : "space-between",
        overflow : "hidden"
    },
    text : {
        fontSize : 15,
        padding : 8,
        fontWeight : "700",
        color : "#000",
        overflow : "hidden"

    }
    
 })
export {link}