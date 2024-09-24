import api from '@/api/api';
import { AuthContext, FormatUser } from '@/contexts/AuthProvider';
import { Link, useRouter } from 'expo-router';
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login({ navigation }: any) {
  const [focusedInput, setFocusedInput] = useState<string>('')
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    /*
    const data: FormatUser = {
      token: "",
      user_login: ""
    }
    setUser(data)
    */
  }, [])

  const handleLogin = async () => {
    try {
      const response = await api.post('sessions', { login, password })

      if(response.data.token) {
        const data: FormatUser = {
          id: response.data.id,
          token: response.data.token, 
          user_login: response.data.user_login || login
        }

        api.defaults.headers['x-session-token'] = data.token

        setUser(data)

        router.push('/tabs/Feeds')
      } else {
        alert('Login Failed: Invalid response')
        return false
      }
    } catch (error) {
      console.error(error)
      alert('Login Failed')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Papacapim</Text>
      <TextInput 
        style={[styles.input, focusedInput === 'login' && styles.focusedInput]}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        onFocus={() => setFocusedInput('login')} 
        onBlur={() => setFocusedInput('')}
      />
      <TextInput 
        style={[styles.input, focusedInput === 'password' && styles.focusedInput]}
        placeholder="Senha"  
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
        onFocus={() => setFocusedInput('password')} 
        onBlur={() => setFocusedInput('')}
      />
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
        <Link href="/Cadastro" asChild>
          <TouchableOpacity style={styles.buttonBack}>
            <Text style={styles.buttonBackText}>Cadastrar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    gap: 5
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  focusedInput: {
    borderColor: '#1DA1F2',
  },
  containerButtons: {
    gap: 10
},
  button: {
    backgroundColor: '#1DA1F2',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
    alignItems: 'center'
  },
  buttonBack: {
    borderColor: '#1DA1F2',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
    alignItems: 'center'
  },
  buttonBackText: {
    color: '#1DA1F2'
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600'
  }
})
