import 'react-native-gesture-handler';

import React,{useState,useEffect} from 'react';
import {AsyncStorage} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import {BottomTab,AddSensor,Edit,EditSensor ,link,Contact, confing} from './screens'
import {AppContext} from './component'
import Realm from "realm";

const Stack = createStackNavigator();

const Tesla_SCHEMA = 'Tesla'
const TeslaSchema = {
    name : Tesla_SCHEMA,
    primaryKey : 'id',
    properties : {
        id : 'int',
        name : {type : 'string', indexed : true},
        urlon : 'string',
        icon : "string",
        onoff : {type : 'bool', default : false},
        connected : {type : 'bool', default : false},

    }
}
const databaseOption = {
  path : 'TeslaListApp.realm',
  schema : [TeslaSchema]
}


const Tesla_SCHEMA_Sensor = 'TeslaSensor'
const TeslaSchemaSensor = {
    name : Tesla_SCHEMA_Sensor,
    primaryKey : 'id',
    properties : {
        id : 'int',
        nameSensor : {type : 'string', indexed : true},
        urlSensor : 'string',
        onoff : {type : 'bool', default : false},
        iconSeonsor : "string",
        connected : {type : 'bool', default : false},


    }
}
const databaseOptionSensor = {
  path : 'TeslaListAppSensor.realm',
  schema : [TeslaSchemaSensor]
}


// سنسور دما رطوبت
// const Tesla_SCHEMA_Sensor_Temp = 'TeslaSensorTemp'
// const TeslaSchemaSensorTemp = {
//     name : Tesla_SCHEMA_Sensor_Temp,
//     primaryKey : 'id',
//     properties : {
//         id : 'int',
//         nameSensorTemp : {type : 'string', indexed : true},
//         urlSensorTemp : 'string',
//         onoffSensorTemp : "int",
//         iconSeonsorTemp : "string",
//         connected : {type : 'bool', default : false},

//     }
// }
// const databaseOptionSensorTemp = {
//   path : 'TeslaListAppSensorTemp.realm',
//   schema : [TeslaSchemaSensorTemp]
// }


const App = (props)=>{
const [name,setName] =useState('')
const [urlon,setUrlon] =useState('')
const [icon,setIcon] =useState('')
const [nameSensor,setNameSensor] =useState('')
const [urlSensor,setUrlSensor] =useState('')
const [iconSeonsor,setIconSensor] =useState('')
const [nameSensorTemp,setNameSensorTemp] =useState('')
const [urlSensorTemp,setUrlSensorTemp] =useState('')
const [iconSeonsorTemp,setIconSensorTemp] =useState('')
const [id,setId] =useState(Math.floor(Math.random() * 100000))
const [dataValue,setDataValue] = useState([])
const [dataValueSensor,setDataValueSensor] = useState([])
const [dataValuesingel,setDataValuesingel] = useState([])
const [dataValueGroop,setDataValueGroop] = useState([])
const [dataValueSensorTemp,setDataValueSensorTemp] = useState([])
const [cheng,setCheng]=useState(false)
const [active,setActive]=useState(true)




// useEffect(()=>{
//   setCheng(!cheng)
// },[])

console.log(dataValue)
const dataSchema = {
  name : name,
  urlon : urlon,
  icon : icon,
  id : id,
  onoff : false,
  connected : false
}
const dataSchemaSensor = {
  nameSensor : nameSensor,
  urlSensor : urlSensor,
  iconSeonsor : iconSeonsor,
  onoffSensor : false,
  id : id,
  connected : false
}

// دما رطوبت
// const dataSchemaSensorTemp = {
//   nameSensorTemp : nameSensorTemp,
//   urlSensorTemp : urlSensorTemp,
//   iconSeonsorTemp : iconSeonsorTemp,
//   onoffSensorTemp : 0,
//   id : id,
//   connected : false
// }
useEffect(() => {
  const current = async () => {
  const value = await AsyncStorage.getItem('active')
  if (value != null)
     setActive(JSON.parse(value))
  }
  current()

  }, [])


console.log("active",active)

const Data = {


Activation : async (value) =>{
try {
    if (value == true) {
    setActive(true);
    await AsyncStorage.setItem('active',JSON.stringify(true) )
    }
    } catch (error) {
        console.log(error)
    }
},

TodoSubmittiing : () =>{
  setId(Math.floor(Math.random() * 10000) + 1)
  new Promise((resolve, reject) => {
    Realm.open(databaseOption).then(realm => {
        realm.write(() => {
            realm.create(Tesla_SCHEMA, dataSchema)
            resolve(dataSchema)
        })
    }).catch(err => reject(err))
    
})
},

TodoSubmittiingSensor : () =>{
  setId(Math.floor(Math.random() * 10000) + 1)
  new Promise((resolve, reject) => {
    Realm.open(databaseOptionSensor).then(realm => {
        realm.write(() => {
            realm.create(Tesla_SCHEMA_Sensor, dataSchemaSensor)
            resolve(dataSchemaSensor)
        })
    }).catch(err => reject(err))
    
})
},

// دما رطوبت

// TodoSubmittiingSensorTemp : () =>{
//   setId(Math.floor(Math.random() * 10000) + 1)
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptionSensorTemp).then(realm => {
//         realm.write(() => {
//             realm.create(Tesla_SCHEMA_Sensor_Temp, dataSchemaSensorTemp)
//             resolve(dataSchemaSensorTemp)
//         })
//     }).catch(err => reject(err))
    
// })
// },

UpdateOnoff : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOption).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA, data.id)
             updateTodoItem.onoff = data.onoff
             resolve()
         })

      }).catch(err => reject(err))
  })
},

Updateconnected : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOption).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA, data.id)
             updateTodoItem.connected = data.connected
         })

      }).catch(err => reject(err))
  })
},

UpdateconnectedSensor : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOptionSensor).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor, data.id)
             updateTodoItem.connected = data.connected
             setCheng(!cheng)
             AppSensor()
              console.log("ggggggggg")
         })


      }).catch(err => reject(err))
  })
},

UpdateEdit : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOption).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA, data.id)
             updateTodoItem.name = data.name
             updateTodoItem.icon = data.icon
             updateTodoItem.urlon = data.urlon
             resolve()
         })

      }).catch(err => reject(err))
  })
},

UpdateEditSensor : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOptionSensor).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor, data.id)
             updateTodoItem.nameSensor = data.nameSensor
             updateTodoItem.iconSeonsor = data.iconSensor
             updateTodoItem.urlSensor = data.urlSensor
             resolve()
         })

      }).catch(err => reject(err))
  })
},

// دما رطوبت
// UpdateEditSensorTemp : (data) => {
//   new Promise((resolve,reject)=>{
//       Realm.open(databaseOptionSensorTemp).then(realm => {
//          realm.write(() => {
//              let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor_Temp, data.id)
//              updateTodoItem.nameSensorTemp = data.nameSensorTemp
//              updateTodoItem.iconSeonsorTemp = data.iconSensorTemp
//              updateTodoItem.urlSensorTemp = data.urlSensorTemp
//              resolve()
//          })

//       }).catch(err => reject(err))
//   })
// },

UpdateEditSensorOnoff : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOptionSensor).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor, data.id)
             updateTodoItem.onoff = data.onOff
             resolve()
             setCheng(!cheng)
             AppSensor()
         })
      }).catch(err => reject(err))
  })
},

UpdateSensor : (data) => {
  new Promise((resolve,reject)=>{
      Realm.open(databaseOptionSensor).then(realm => {
         realm.write(() => {
             let updateTodoItem = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor, data.id)
             updateTodoItem.onoff= data.onoff
             resolve()
         })

      }).catch(err => reject(err))
  })
},

DeleteItem : (id) => {
  setDataValueGroop([])
  setDataValuesingel([])
  new Promise((resolve, reject) => {
      Realm.open(databaseOption).then(realm => {
          realm.write(() => {
              let deleteTesla = realm.objectForPrimaryKey(Tesla_SCHEMA, id)
              realm.delete(deleteTesla)
              resolve()
          })
          setCheng(!cheng)

      }).catch(err => reject(err))
  })
},

DeleteItemSensor : (id) => {
  new Promise((resolve, reject) => {
      Realm.open(databaseOptionSensor).then(realm => {
          realm.write(() => {
              let deleteTesla = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor, id)
              realm.delete(deleteTesla)
              resolve()
          })
          setCheng(!cheng)

      }).catch(err => reject(err))
  })
},

// دما رطوبت
// DeleteItemSensorTemp : (id) => {
//   new Promise((resolve, reject) => {
//       Realm.open(databaseOptionSensorTemp).then(realm => {
//           realm.write(() => {
//               let deleteTesla = realm.objectForPrimaryKey(Tesla_SCHEMA_Sensor_Temp, id)
//               realm.delete(deleteTesla)
//               resolve()
//           })
//           setCheng(!cheng)

//       }).catch(err => reject(err))
//   })
// },



  name,setName,
  urlon,setUrlon,
  icon,setIcon,
  id,setId,
  dataValue,
  cheng,setCheng,
  dataValueGroop,
  dataValuesingel,
  iconSeonsor,setIconSensor,
  urlSensor,setUrlSensor,
  nameSensor,setNameSensor,
  dataValueSensor,setDataValueSensor,
  dataValueSensorTemp,
  nameSensorTemp,setNameSensorTemp,
  urlSensorTemp,setUrlSensorTemp,
  iconSeonsorTemp,setIconSensorTemp,
  active

}


const App1=()=>{
  new Promise((resolve, reject) => {
    Realm.open(databaseOption).then(realm => {
        var allTesla = realm.objects(Tesla_SCHEMA)
  
        let dataValueGroop1 = []
        let dataValuesingel1 = []
        allTesla.forEach(i => {
          let arr = i.urlon.split("&")
          if (arr.length ==1 ) {
            dataValuesingel1.push(i)
          }else{
            dataValueGroop1.push(i)

          }
      });

        setDataValuesingel(dataValuesingel1)
        setDataValueGroop(dataValueGroop1)
        resolve(allTesla)
        setDataValue(allTesla)

    }).catch(err => reject(err))
})
}

const AppSensor=()=>{
  new Promise((resolve, reject) => {
    Realm.open(databaseOptionSensor).then(realm => {
        let allTesla = realm.objects(Tesla_SCHEMA_Sensor) 
        resolve(allTesla)
        setDataValueSensor(allTesla)

    }).catch(err => reject(err))
})
}


// دما رطوبت
// const AppSensorTemp=()=>{
//   new Promise((resolve, reject) => {
//     Realm.open(databaseOptionSensorTemp).then(realm => {
//         let allTesla = realm.objects(Tesla_SCHEMA_Sensor_Temp) 
//         resolve(allTesla)
//         setDataValueSensorTemp(allTesla)
//     }).catch(err => reject(err))
// })
// }


useEffect(()=>{
  App1()
  AppSensor()
  // دما رطوبت
  // AppSensorTemp()
},[cheng])




  return(
   <NavigationContainer>
    <AppContext.Provider value={Data}>
     <Stack.Navigator
      screenOptions={{
        headerShown : false,
      }} 
      initialRouteName="Home"  
    >

      <Stack.Screen name="Home" component={BottomTab} {...props}/>
      <Stack.Screen name="AddSensor" component={AddSensor} {...props}/>
      <Stack.Screen name="Edit" component={Edit} {...props}/>
      <Stack.Screen name="EditSensor" component={EditSensor} {...props}/>
      {/* <Stack.Screen name="AddSensorTemp" component={AddSensorTemp} {...props}/> */}
      <Stack.Screen name="link" component={link} {...props}/>
      <Stack.Screen name="confing" component={confing} {...props}/>
      <Stack.Screen name="Contact" component={Contact} {...props}/>

     </Stack.Navigator>
    </AppContext.Provider>
   </NavigationContainer>
  )
}

export default App;
