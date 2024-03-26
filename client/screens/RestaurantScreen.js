import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { themeColours } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'

const RestaurantScreen = () => {
  const {params}=useRoute() //returned data without destructuring is of the form {"key": "Restaurant-n0JN6okKJU87N6FrGO33m", "name": "Restaurant", "params": {"address": "434 second street", "category": "Fast Food", "description": "Hot and spicy pizzas", "dishes": [[Object], [Object], [Object]], "id": 1, "image": 3, "lat": -85.5324269, "lng": 38.2145602, "name": "Papa Johns", "reviews": "4.4k", "stars": 4}, "path": undefined}
  console.log(params) //since we destructured it above, it takes value of just the param keyword in the returned data above(check for params above)
  const navigation=useNavigation()
  return (
    <View>
      <CartIcon/>
      <StatusBar barStyle="light-content"/>
      <ScrollView className="bg-slate-400">
        <View className="relative">
          <Image source={params.image} className="w-full h-72"/>
          <TouchableOpacity className="absolute top-4 left-4 bg-gray-50 rounded-full shadow p-2" onPress={()=>{navigation.goBack()}}> 
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColours.bgColor(1)} ></Icon.ArrowLeft>
          </TouchableOpacity>

        </View>
        <View className="rounded-t-lg rounded-r-lg bg-white pt-6 -mt-12">
          <View className="px-5">
            <Text className="text-3xl font-bold">{params.name}</Text>
            <View className="flex-row space-x-1 items-center ">
              <View className="flex-row items-center pt-2 ">
                <Icon.Star height={20} width={20} stroke="yellow" fill="yellow"></Icon.Star>
                <Text className="text-green-600">{params.stars}</Text>
                <Text>({params.reviews} reviews) . {params.category}</Text>
              </View>
              <View className="flex-row pt-2 space-x-1">
                <Icon.MapPin height={20} width={20} stroke="black"/>
                <Text>Nearby | {params.address}</Text>

              </View> 
            </View>
            <Text className="py-2">{params.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="text-2xl px-5 font-bold">Menu</Text>

          {params.dishes.map((dish,index)=>{
              return(
              <DishRow item={dish} key={index}/>
              )
          })}

        </View>
          

      </ScrollView>
    </View>
  )
}

export default RestaurantScreen