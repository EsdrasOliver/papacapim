import AuthProvider from '@/contexts/AuthProvider'
import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen options={{headerShown: false}} name="index" />
        <Stack.Screen options={{headerShown: false}} name="Cadastro" />
        <Stack.Screen name="Post" />
        <Stack.Screen name="OutroUser" />
        <Stack.Screen name="AlterUser" />
      </Stack>
    </AuthProvider>
  )
}
