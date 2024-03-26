import { View, Text, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColours } from '../theme';
import {useNavigation} from '@react-navigation/native'

const RestaurantCard = ({item}) => {
  const navigation= useNavigation()
  return (
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Restaurant',{...item})}}>
      <View className="rounded-3xl shadow-xl mr-6 bg-white pb-2 mb-1" style={{shadowColor:themeColours.bgColor(1)}}> 
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image}></Image>
        <Text className="text-lg font-semibold pt-2 px-2">{item.name}</Text>
        <View className="flex-row px-2 pt-2 space-x-2 ">
            <Icon.Star height={20} width={20} stroke="yellow" fill="yellow"></Icon.Star>
            <Text className="text-green-600">{item.stars}</Text>
            <Text>({item.reviews} reviews) . {item.category}</Text>
        </View>
        <View className="flex-row px-2 pt-2 space-x-1">
            <Icon.MapPin height={20} width={20} stroke="black"/>
            <Text>Nearby | {item.address}</Text>

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard