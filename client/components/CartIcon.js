import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColours } from '../theme'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
  const navigation=useNavigation()
  return (
    
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity style={{backgroundColor:themeColours.bgColor(1)}} className="flex-row justify-between items-center rounded-full mx-5 p-4 py-3 shadow-lg"
      onPress={()=>navigation.navigate("Cart")}>
        <View className="p-2 px-4 rounded-full" style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
            <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="text-white font-bold text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${23}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon