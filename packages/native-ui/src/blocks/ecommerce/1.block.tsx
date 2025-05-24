import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Label from '@/components/ui/label'
import B1Header from '../componets/1.block/header'
import B1Description from '../componets/1.block/description-content'
import B1Footer from '../componets/1.block/footer'

const Block1 = () => {
  return (
    <View className='flex-1 gap-10 bg-white p-4'>
      <B1Header/>
      <Image source={{uri: "https://media.croma.com/image/upload/v1685969680/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264230_juwxcm.png"}} className='w-full h-60 rounded-lg' />

      <B1Description/>
      <B1Footer/>
    </View>
  )
}

export default Block1

const styles = StyleSheet.create({})