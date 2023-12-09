import React, { useCallback, useEffect } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashS from 'expo-splash-screen'
import { LinearGradient } from 'expo-linear-gradient'

function SplashScreen() {
  const navigation = useNavigation()

  const [ fontsLoaded, fontError ] = useFonts({
    SpaceGroteskMedium: require('../fonts/SpaceGrotesk-Medium.ttf'),
    SpaceGroteskRegular: require('../fonts/SpaceGrotesk-Regular.ttf'),
    SpaceGroteskSemiBold: require('../fonts/SpaceGrotesk-SemiBold.ttf')
  })

  const onLayoutRootView = useCallback( async() => {
    if( fontsLoaded || fontError ) {
      await SplashS.hideAsync()
    }

    setTimeout(() => {
      navigation.navigate('Welcome')
    }, 3000)
  })

  useEffect(() => {
    onLayoutRootView()
  }, [ fontsLoaded, fontError ])

  if( !fontsLoaded) {
    return null
  }

  return (
    <ImageBackground
      source={ require('../../assets/screens/splash-screen.png')}
      className='flex-1 justify-center items-center'
    />
      /* <LinearGradient
        colors={[ 'rgba(0,0.5,0,0.5)', 'rgba(0,0.5,0,0.75)' ]}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View onLayout={ onLayoutRootView} className='flex-1 flex-row justify-center items-end'>
          <Text className='text-white text-3xl uppercase z-20 font-extrabold pb-5'>
            Pauto Noticias App
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground> */
  )
}

export default SplashScreen