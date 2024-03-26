import { View, Text, StatusBar, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { themeColours } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white mb-16">
      <StatusBar barStyle='dark-content'/>
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 rounded-full items-center border border-black p-3 my-1">
          <Icon.Search height="25" width={25} stroke="gray"/>
          <TextInput placeholder='Restaurants' className="flex-1" />
          <View className="flex-row border-l border-black p-2">
            <Icon.MapPin height={20} width={20} stroke="black"></Icon.MapPin>
            <Text className="pl-1">Kochi, Kerala</Text>
          </View>
        </View>
        <View style={{backgroundColor:themeColours.bgColor(1)}}className="p-3 rounded-full">
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white"/>

        </View>

      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}>

        <Categories/>

        <View className="mt-5">
          {
            [featured,featured,featured].map((element,index)=>{
              return(
                <FeaturedRow key={index} title={element.title} restaurants={element.restaurants} description={element.description}/>
              )

            })
          }
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen