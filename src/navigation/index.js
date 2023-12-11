import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useColorScheme } from "nativewind"
import { HomeScreen, CategoryScreen, NewDetailScreen, SavedScreen, SearchScreen, SplashScreen, WelcomeScreen, RadioScreen  } from "../screens"
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { colorScheme, toggleColorScreen } = useColorScheme()
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={ ({ route }) => ({
          headerShown: false,
          headerTitleStyle: {
            fontFamily: 'SpaceGroteskMedium'
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if( route.name === 'Inicio') {
              iconName = 'home'
            } else if( route.name === 'Categorias') {
              iconName = 'compass-outline'
            } else if( route.name === 'Play'){
              iconName = 'play-outline'
            } else if( route.name === 'Buscar') {
              iconName = 'search-outline'
            } else if( route.name === 'Mis Articulos') {
              iconName = 'bookmark-outline'
            }

            const customize = 25

            return (
              <Ionicons 
                name={ iconName } 
                size={ wp(7)}
                color={ focused ? '#1b8fc3' : 'gray' }
              />               
            )
          },
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1b8fc3' : '#191b1e',
            borderTopWidth: 0,
            elevation: 0
          },
        })}
      >
        <Tab.Screen 
          name='Inicio' 
          component={ HomeScreen } 
        />
        <Tab.Screen name='Categorias' component={ CategoryScreen } />
        <Tab.Screen name='Play' component={ RadioScreen } />
        <Tab.Screen name='Buscar' component={ SearchScreen } />
        <Tab.Screen name='Mis Articulos' component={ SavedScreen }/>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Splash' component={ SplashScreen } />
        <Stack.Screen name='Welcome' component={ WelcomeScreen } />
        <Stack.Screen 
          name='NewDetail' 
          component={ NewDetailScreen }
          options={{ animation: 'slide_from_bottom'}}  
        />
        <Stack.Screen name='HomeTabs' component={ TabNavigator } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AppNavigation