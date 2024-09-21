import AuthProvider from '@/contexts/AuthProvider'
import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="Cadastro" />
        <Stack.Screen name="Post" />
        <Stack.Screen name="OutroUser" />
      </Stack>
    </AuthProvider>
  )
}
