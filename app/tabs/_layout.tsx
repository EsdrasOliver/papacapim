import AuthProvider from '@/contexts/AuthProvider'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'

export default function _layout() {
  return (
    <AuthProvider>
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen 
          options={{
            headerShown: false, 
            tabBarIcon: () => (
              <Image 
                source={require('../../assets/images/feed.png')}
                style={{ width: 24, height: 24 }}
              />
            )
          }} 
          name="Feeds"
        />
        <Tabs.Screen 
          options={{
            headerShown: false, 
            tabBarIcon: () => (
              <Image 
                source={require('../../assets/images/search.png')}
                style={{ width: 24, height: 24 }}
              />
            )
          }} 
          name="Buscar"
        />
        {/*<Tabs.Screen options={{headerShown: false}} name="Profile"  />*/}
      </Tabs>
    </AuthProvider>
  )
}
