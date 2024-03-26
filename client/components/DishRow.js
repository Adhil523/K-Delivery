import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { themeColours } from '../theme'

const DishRow = ({item}) => {
  return (
    <View className=" rounded-lg flex-row bg-white pl-3 mb-3 mx-2 shadow-2xl shadow-slate-500 items-center">
        <Image className="rounded-lg" style={{height:100, width:100}} source={item.image}/>
        <View className="flex flex-1 space-y-3">
            <View className="pl-3">
                <Text className="text-xl">{item.name}</Text>
                <Text className="text-gray-700">{item.description}</Text>
            </View>
            <View className="pl-3 flex-row justify-between items-center">
                <Text className="text-xl font-bold">${item.price}</Text>
                <View className="flex-row space-x-1 items-center pr-2">
                    <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor:themeColours.bgColor(1)}}>
                        <Icon.Minus height={20} width={20} strokeWidth={3} stroke="black"></Icon.Minus>
                    </TouchableOpacity>
                    <Text className="px-1">{2}</Text>
                    <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor:themeColours.bgColor(1)}}>
                        <Icon.Plus height={20} width={20} strokeWidth={3} stroke="black"></Icon.Plus>
                    </TouchableOpacity>
                </View>
                
            </View>

        </View>
      
    </View>
  )
}

export default DishRow