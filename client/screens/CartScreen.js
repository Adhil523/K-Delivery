import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColours } from '../theme'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
    const restaurant=featured.restaurants[0]
    const navigation=useNavigation()
  return (
    <View className="bg-white flex-1">
        <View className="relative py-4 shadow-sm">
            <TouchableOpacity style={{backgroundColor:themeColours.bgColor(1)}} className="absolute z-10 rounded-full p-1 top-5 left-2 shadow"
            onPress={()=>{navigation.goBack()}}>
                <Icon.ArrowLeft strokeWidth={3} stroke="white"/>
            </TouchableOpacity>
        </View>
        <View className="-mt-2 mb-4">
            <Text className="font-bold text-xl text-center">Your <Text style={{color:themeColours.bgColor(1)}}>Cart</Text></Text>
            <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>

        {/* delivery time */}
        <View style={{backgroundColor:themeColours.bgColor(0.2)}} className="flex-row px-4 items-center">
            <Image source={require("../assets/images/bikeGuy.jpg")} className="w-20 h-20 rounded-full"/>
            <Text className="flex-1 pl-4 ">Delivery in 20-30 min</Text>
            <TouchableOpacity >
                <Text style={{color:themeColours.text}} className="font-bold">Change</Text>
            </TouchableOpacity>
        </View>

        {/* dishes */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}} className="bg-white pt-5">
            {
                restaurant.dishes.map((dish,index)=>{
                    return(
                    <View key={index} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg">
                        <Text className="font-bold" style={{color:themeColours.text}}>2 x </Text>
                        <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                        <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text> 
                        <Text className="font-semibold text-base">${dish.price}</Text>
                        <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor:themeColours.bgColor(1)}}>
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                        </TouchableOpacity>
                    </View>
                    )
                })
            }

        </ScrollView>

        {/* total */}
        <View style={{backgroundColor:themeColours.bgColor(0.3)}} className="p-6 px-8 rounded-t-3xl space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Subtotal</Text>
                <Text className="text-gray-700">$30</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700">Delivery charge</Text>
                <Text className="text-gray-700">$5</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-700 font-extrabold">Order Total</Text>
                <Text className="text-gray-700 font-extrabold">$35</Text>
            </View>

        </View>
    </View>
  )
}

export default CartScreen