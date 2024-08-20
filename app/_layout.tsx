import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feeds from "@/pages/Feeds";
import Profile from "@/pages/Profile";
import Post from "@/pages/Post";
import Login from "@/pages/Login";
import Cadastro from "@/pages/Cadastro";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen 
          name="Login" 
          component={Login} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('@/assets/images/user.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('@/assets/images/register.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Feed'
          component={Feeds}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('@/assets/images/feed.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen  
          name='Editar' 
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('@/assets/images/edit.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen 
          name='Post' 
          component={Post} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('@/assets/images/user.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
