import React, { useState } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home,Add ,setting,AddSensor} from '../screens';
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'


 const Tab = createBottomTabNavigator();

 const BottomTab =(props)=>{
     return(
         <Tab.Navigator initialRouteName="Home">  
             <Tab.Screen
                name="setting"
                component={setting}
                options={{
                    tabBarLabel : "setting",
                    tabBarColor : "#b8f2e6",
                    tabBarItemStyle : {borderRadius  :50},
                    headerShown : false,
                    tabBarIcon : ({color,size}) =>(
                        <Ionicons name="settings" color="#3A3D46" size={size}/>
                    ),
                    tabBarStyle :{backgroundColor : "#b8f2e6",
                    borderRadius : 50,width : "90%",alignSelf : "center",position : "absolute",bottom : "3%",left :"5%"},
                    tabBarActiveBackgroundColor : "#5e6472",
                    tabBarShowLabel : false
                }}
                
             />
             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel : "Home",
                    tabBarColor : "#444",
                    headerShown : false,
                    tabBarActiveBackgroundColor : "#5e6472",
                    tabBarIconStyle : {top : "11%"},
                    tabBarItemStyle : {height : 70,bottom : 20,borderTopLeftRadius : 70,borderTopRightRadius : 70, },
                    tabBarIcon : ({color,size}) =>(
                        <Entypo name="home" color="#3A3D46" size={size}/>
                    ),
                    tabBarStyle :{backgroundColor : "#b8f2e6",borderRadius : 50,width : "90%",
                    alignSelf : "center" ,position : "absolute",bottom : "3%",left :"5%"},
                    tabBarShowLabel : false,
                     
                }}
                
             />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarLabel : "Add",
                    tabBarColor : "#444",
                    tabBarItemStyle : {borderRadius  :50,height : 50,top : -1},
                    headerShown : false,
                    tabBarIcon : ({color,size}) =>(
                        <Entypo name="squared-plus" color="#3A3D46" size={size}/>
                    ),
                    tabBarStyle :{backgroundColor : "#b8f2e6",borderRadius : 50,width : "90%",
                    alignSelf : "center",position : "absolute",bottom : "3%",left :"5%"},
                    tabBarActiveBackgroundColor : "#5e6472",
                    tabBarShowLabel : false,
               }}
             />


         </Tab.Navigator>
     )
 }

 export {BottomTab}