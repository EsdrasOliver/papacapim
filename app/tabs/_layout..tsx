import AuthProvider from '@/contexts/AuthProvider'
import { Tabs } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
    <AuthProvider>
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="Profile" />
      </Tabs>
    </AuthProvider>
  )
}
