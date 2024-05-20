import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Noti from "./assets/Vector.svg"
import Recentes from "@/screens/Home/assets/orientation lock.svg"
import Config from "@/screens/Home/assets/Settings.svg"
import Um from  "@/screens/Home/assets/Images/um"
import Dois from "@/screens/Home/assets/Images/dois"
import Tres from "@/screens/Home/assets/Images/tres"
import Quatro from "@/screens/Home/assets/Images/quatro"
import Cinco from "@/screens/Home/assets/Images/cinco"
import Seis from "@/screens/Home/assets/Images/seis"
import Cards from './Cards'

export default function Home() {
  return (
    <View style={{backgroundColor:"#111111", flex:1}} >
      <View className='flex-row justify-between ml-5 mt-16'>
        <Text className='text-3xl text-white font-bold '>Boa Tarde</Text>
        <View className='flex-row justify-evenly mr-5'>
          <Noti width={30} height={30} style={{marginLeft:15}}/>
          <Recentes width={30} height={30} style={{marginLeft:15}}/>
          <TouchableOpacity>          
            <Config width={30} height={30} style={{marginLeft:15}}/>
          </TouchableOpacity>
        </View>
      </View>
       <Cards/>
      </View>
      
  )
}
