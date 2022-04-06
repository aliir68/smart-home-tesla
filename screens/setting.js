import React,{useContext, useEffect} from 'react'
import { Header } from '../component/Header'
import {View , Text,StyleSheet,ImageBackground, Pressable,Image,TouchableOpacity} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import { useBazaar } from '@cafebazaar/react-native-poolakey';
import {AppContext} from '../component'

 const setting = (props)=>{
    const {active,Activation} = useContext(AppContext)

const bazaar = useBazaar("MIHNMA0GCSqGSIb3DQEBAQUAA4G7ADCBtwKBrwDZG1qMRL3r0gH3vR8JHEQXszY58lYYNmeK9bldcDsbVprKQs8NedFneNGlnF056Fq3RGTKdmYgXy5MQzhuYjOcv7T6hS97CtvENGg6ALJW+gK79UHE/+D65tzAwNKtu5qm+dkNixPh1woGmk8jGBlld2V2332sJ0T9Av+NSQjMbpp3YsbYJgZMAQf98gDjZ/yieq3hFmVpwmY2zrJX5NNyPeZdi7SyAJthxFlVbVMCAwEAAQ==");

const Buy = ()=>{
    const price = async()=>{
        bazaar
        .connect("MIHNMA0GCSqGSIb3DQEBAQUAA4G7ADCBtwKBrwDZG1qMRL3r0gH3vR8JHEQXszY58lYYNmeK9bldcDsbVprKQs8NedFneNGlnF056Fq3RGTKdmYgXy5MQzhuYjOcv7T6hS97CtvENGg6ALJW+gK79UHE/+D65tzAwNKtu5qm+dkNixPh1woGmk8jGBlld2V2332sJ0T9Av+NSQjMbpp3YsbYJgZMAQf98gDjZ/yieq3hFmVpwmY2zrJX5NNyPeZdi7SyAJthxFlVbVMCAwEAAQ==")
        .catch(console.log("error")); // bazaar is not installed or what?!
    
        const purchaseResult = await  bazaar.purchaseProduct("UPGRADETESLANEW")
        // console.log(purchaseResult)
        if (purchaseResult === null) {
            console.log("از خرید منصرف شد")
        }
        if (purchaseResult.purchaseState === 0) {
            console.log("yes")
            Activation(true)
        }else {
            console.log("no")
        }
    }
        price()

    
}

console.log(active)

const AlertActive = ()=> {
    return(
        <View style={{position : "absolute",top : "10%",left : 0,right : 0,bottom : 10,backgroundColor :"#0009",alignItems: "center",justifyContent : "center"}}>
            <View style={{width : "70%", height : "50%", backgroundColor :"#fff",borderRadius : 10,zIndex : 1}}>
                <View style={{flexDirection : "row",justifyContent : "space-between"}}>
                    <Text style={{fontSize : 25,color : "#111",marginTop : 5,marginLeft : 10}}>ارتقا</Text>
                    <View style={{width : 20,height : 20,borderRadius : 10,backgroundColor : "#FFE919",margin : 10}}/>
                </View>
                <View style={{margin : 10,justifyContent : "space-between",flex : 1 ,}}>
                    <Text style={{marginTop : 10,color : "#000",fontSize : 20}}>لطفا حساب خود را ارتقا دهید فقط در این صورت میتوانید از برنامه استفاده کنید</Text>
                    <Image 
                            source={require('../file/image/bazaar.png')}
                            style={{width : "100%", height : 65,opacity : 0.8,alignSelf : "center"}} resizeMode="center"
                    />
                    <TouchableOpacity
                        onPress={()=>{Buy()}}
                        style={{width : "90%",height : 30,backgroundColor : "green",alignSelf :"center",borderRadius : 5,justifyContent : "center"}}>
                            <Text style={{alignSelf : "center",color : "#fff",fontSize : 18}}> 7,000 تومان</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
)
}

    
    
      
     return(
         <View style={{flex : 1}}>
             <Header/>
              <ImageBackground source={require("../file/image/backgroundasli.jpg")} blurRadius={3} 
                    style={{width: '100%', height: "100%",position : "absolute"}}
            />
            <View>
                <Pressable  onPress={()=>{props.navigation.navigate('confing')}}>
                    <View style={[styles.item,{marginTop : 15}]}>
                        <View style={{justifyContent : "center"}}>
                            <Entypo style={{marginRight : 10}} name="install" size={28} color="aqua"/>
                        </View>

                        <View style={{justifyContent : "center",marginTop : "2%",marginLeft : "10%"}}>
                            <Text style={styles.name}>پیکربندی</Text>
                            <Text style={styles.descrepshen}>نصب و راه اندازی سخت افزار و نرم افزار</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={()=>{props.navigation.navigate('link')}}>
                    <View style={[styles.item,{marginTop : 15}]}>
                        <View style={{justifyContent : "center"}}>
                            <AntDesign style={{marginRight : 10}} name="link" size={28} color="aqua"/>
                        </View>
                        <View style={{justifyContent : "center",marginTop : "2%",marginLeft : "10%"}}>
                            <Text style={styles.name}>لینک</Text>
                            <Text style={styles.descrepshen}>لینک های ذخیره شده  کنترل</Text>
                        </View>
                    </View>
                </Pressable>

                {/* <Pressable onPress={()=>{alert("1")}}>
                    <View style={[styles.item,{marginTop : 15}]}>
                        <View style={{justifyContent : "center"}}>
                            <AntDesign style={{marginRight : 10}} name="questioncircleo" size={28} color="aqua"/>
                        </View>
                        <View style={{justifyContent : "center",marginTop : "2%",marginLeft : "10%"}}>
                            <Text style={styles.name}>آموزش</Text>
                            <Text style={styles.descrepshen}>اموزش کار با اپلیکیشن</Text>
                        </View>
                    </View>
                </Pressable> */}

                <Pressable onPress={()=>{props.navigation.navigate('Contact')}}>
                    <View style={[styles.item,{marginTop : 15}]}>
                        <View style={{justifyContent : "center"}}>
                            <AntDesign style={{marginRight : 10}} name="deleteusergroup" size={28} color="aqua"/>
                        </View>
                        <View style={{justifyContent : "center",marginTop : "2%",marginLeft : "10%"}}>
                            <Text style={styles.name}>درباره من</Text>
                            <Text style={styles.descrepshen}>ارتباط با ما</Text>
                        </View>
                    </View>
                </Pressable>
    
            </View>
            {
                    active == false ?
                        <AlertActive/> : <View/>

                }
         </View>
     )
 } 
 const styles = StyleSheet.create({
    item:{
        alignSelf :"center",
        borderWidth : 2,
        borderColor : "#666",
        width : "95%",
        height : 70,
        justifyContent :"space-between",
        backgroundColor : "#8382",
        borderRadius : 10,
        marginTop : 5,
        flexDirection : "row-reverse"
    },
    name : {
        fontSize : 20,
        fontWeight : "700",
        marginRight : 20
    },
    descrepshen : {
        fontSize : 15,
        fontWeight : "600",
        marginRight : 20
    }

 })
export {setting}