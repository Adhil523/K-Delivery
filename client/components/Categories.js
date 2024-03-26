import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

const Categories = () => {
    const [isActive,setisActive]=useState(null)
    


  return(
    
    <View className="mt-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible" contentContainerStyle={{paddingHorizontal:15}}>
        {categories.map((category,index)=>{
          const isActivecheck=category.id==isActive
          const btnClass=isActivecheck?"bg-gray-600":"bg-gray-200"
          const txtClass=isActivecheck?"font-semibold text-gray-800":"text-gray-500"
          
          return(
                <View key={index} className="flex justify-center items-center mr-6">
                    <TouchableOpacity className={`p-1 px-2 rounded-full shadow ${btnClass}`} onPress={()=>setisActive(category.id)}>
                        <Image style={{width:45,height:45}} source={category.image}/>
                      

                    </TouchableOpacity>
                    <Text className={`${txtClass}`}>{category.name}</Text>

                </View>
            )
            
        })}
      </ScrollView>
    </View>
  )
}

export default Categories