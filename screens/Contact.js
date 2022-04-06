import React,{useState,useEffect} from 'react'
import { Header } from '../component/Header'
import {View , Text,StyleSheet,ImageBackground,Image, TouchableOpacity,Linking,ToastAndroid} from 'react-native'
import Clipboard from '@react-native-community/clipboard';
import StarRating from 'react-native-star-rating';


 const Contact = (props)=>{
     const[starCount,setStarCount] = useState(3)
     return(
         <View style={{flex : 1}}>
              <Header/>
              <ImageBackground source={require("../file/image/backgroundasli.jpg")} blurRadius={5} 
                    style={{width: '100%', height: "100%",position : "absolute"}}
            />
            <View style={{flex : 1 ,justifyContent : "center",alignItems : "center"}}>
                <View style={styles.card}>
                    <View style={{justifyContent : "flex-start",alignItems : "center"}}>
                        <Image style={{width : "100%",height : "60%"}} resizeMode="cover" source={require("../file/image/Tesla.png")}/>
                        <Text style={{fontSize : 20,fontWeight : "700",top : "-5%"}}>V1.0.0</Text>
                    </View>
                    <View style={{marginLeft : 10,position  : "absolute",bottom : "40%"}}>
                        <Text style={{fontSize : 18,color : "#000",fontWeight : "600"}}>اپلیکیشن همیشه در حال بروز رسانی میباشد و موارد زیادی به زودی اضافه خواهد شد ک دیگر نیاز به پرداخت مجدد نمیباشد هرسوالی داشتید میتوانید به پشتیبان پیام دهید</Text>
                    </View>
                    <View style={{position : "absolute",bottom : "15%"}}>
                    <StarRating
                        maxStars={5}
                        containerStyle={{width : "90%",alignSelf : "center",height : 40,}}
                        fullStarColor="#ac1b46"
                        disabled={false}
                        rating={starCount}
                        reversed={true}
                        selectedStar={(rating) => {setStarCount(rating),
                            setTimeout(() => {
                                Linking.openURL('https://cafebazaar.ir/app/com.tesla')                           
                             }, 1000)}
                        }
                        animation="shake"
                    />

                    </View>
                    <View style={{flex : 1,flexDirection : "row",top :150,position : "relative",alignSelf : "center"}}>
                        <TouchableOpacity onPress={()=>{Linking.openURL("https://www.instagram.com/aliir.68/")}}>
                              <Image style={{width : 70,height : 70}} resizeMode="cover" source={require("../file/image/instagram.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Linking.openURL("https://t.me/Aliir68")}} >
                              <Image style={{width : 55,height : 55,marginTop : 10,marginLeft : 45}} resizeMode="cover" source={require("../file/image/telegram_PNG26.png")}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={()=>{Linking.openURL('https://wa.me/989213206864')}}>
                                                       
                              <Image style={{width : 55,height : 55,marginTop : 10,marginLeft : 12}} resizeMode="cover" source={require("../file/image/phone.png")}/>
                        </TouchableOpacity> */}
                        <TouchableOpacity  onPress={()=>{Linking.openURL('https://teslaiot.myfreesites.net')}}>
                              <Image style={{width : 55,height : 55,marginTop : 12,marginLeft : 50}} resizeMode="cover" source={require("../file/image/Info-icon.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         </View>
     )
 } 
 const styles = StyleSheet.create({
   card : {
    width : "90%",
    height : "90%",
    backgroundColor : "#9995",
    borderRadius : 10,
    borderWidth : 3,
    borderColor : "#6663",

   }
    
 })
export {Contact}