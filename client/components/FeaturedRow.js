import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColours } from '../theme'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title,restaurants,description}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-sm">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color:themeColours.text}}>See all</Text>
        </TouchableOpacity>

      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}} className="overflow-visible py-5">
          {
            restaurants.map((restaurant,index)=>{
              return(
                <RestaurantCard item={restaurant} key={index}/>
              )
            })
          }
      </ScrollView>

    </View>
  )
}

export default FeaturedRow