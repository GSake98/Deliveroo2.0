import { Image, View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// Icons from heroicons.com
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      // setOptions has predetermined values we can track
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-3'>
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          {/* Means that this view will take most of the room */}
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now!
            </Text>
            <Text className='font-bold text-xl'>
              Current Locations
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color='gray'></MagnifyingGlassIcon>
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          ></TextInput>
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB"></AdjustmentsVerticalIcon>
      </View>

      {/* Body */}
      <Text>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
