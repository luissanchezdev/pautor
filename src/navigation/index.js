import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useColorScheme } from "nativewind"
import { HomeScreen, DiscoverScreen, NewDetailScreen, SavedScreen, SearchScreen, SplashScreen, WelcomeScreen  } from "../screens"
import { IonicIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { colorScheme, toggleColorScreen } = useColorScheme()
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={ ({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if( route.name === 'Home') {
              iconName = 'home'
            } else if( route.name === 'Discover') {
              iconName = 'compass'
            } else if( route.name === 'Search') {
              iconName = 'search'
            } else if( route.name === 'Saved') {
              iconName = 'bookmark'
            }

            const customize = 25

            return (
              <IonicIcons>
                name={ iconName }
                size={ customize }
                color={ focused ? 'green' : 'gray' }
              </IonicIcons>
            )
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'SpaceGroteskMedium'
          },
          tabBarLabelStyle: {
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          }
        })}
      >
        <Tab.Screen name='Home' component={ HomeScreen } />
        <Tab.Screen name='Discover' component={ DiscoverScreen } />
        <Tab.Screen name='Search' component={ SearchScreen } />
        <Tab.Screen name='Saved' component={ SavedScreen } />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: true
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