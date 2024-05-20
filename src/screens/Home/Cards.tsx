import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Um from  "@/screens/Home/assets/Images/um"
import Dois from "@/screens/Home/assets/Images/dois"
import Tres from "@/screens/Home/assets/Images/tres"
import Quatro from "@/screens/Home/assets/Images/quatro"
import Cinco from "@/screens/Home/assets/Images/cinco"
import Seis from "@/screens/Home/assets/Images/seis"

export default function Cards() {
  return (
    <View>
      <View className='mt-10'>
        <View className='flex-row justify-evenly mb-4'>
        <Cinco/>
        <Dois/>
        </View>

        <View className='flex-row justify-evenly mb-4'>
        <Tres/>
        <Quatro/>
        </View>

        <View className='flex-row justify-evenly'>
        <Seis/>
        <Um/>
        </View>
    </View>
    </View>
  )
}

