import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { SpaceGroteskBold } from '../fonts'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

function WelcomeScreen() {

  const navigation = useNavigation()

  return (
    <ImageBackground
      source={ require('../../assets/screens/welcome-screen.jpg')}
      className='flex-1 justify-center items-center'
    >
      <LinearGradient 
        colors={[ 'transparent', 'rgba(0,0,0,0.9']}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%'
        }}

        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View
          className='justify-end items-center w-full h-full mb-5 p-5'
        >
          <Text
            className='text-white text-xl p-5 z-99'
            style={{
              fontFamily: SpaceGroteskBold,
              fontSize: wp(7)
            }}
          >
            Información actualizada del acontecer regional y nacional
          </Text>

          <TouchableOpacity 
            className='bg-white px-10 py-3 rounded-full' 
            onPress={ () => navigation.navigate('HomeTabs') }
          >
            <Text className='text-primary text-2xl'>
              Iniciemos
            </Text>
          </TouchableOpacity>
        </View>
        
      </LinearGradient>
    </ImageBackground>
  )
}

export default WelcomeScreen