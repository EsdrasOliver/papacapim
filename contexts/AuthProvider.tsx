import React, { createContext, useState } from 'react'

interface FormatAuthContext {
  user: FormatUser | null
  setUser: React.Dispatch<React.SetStateAction<FormatUser | null>>
}

export interface FormatUser {
  id?: number
  user_login: string
  token: string
  ip?: number
  created_at?: string
  updated_at?: string
}

export const AuthContext = createContext<FormatAuthContext>({} as FormatAuthContext) 

export default function AuthProvider({children}: any) {
  const [user, setUser] = useState<FormatUser | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
