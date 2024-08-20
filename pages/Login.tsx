import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login({ navigation }: any) {
  const [focusedInput, setFocusedInput] = useState<string>('')

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Papacapim</Text>
      <TextInput 
        style={[styles.input, focusedInput === 'email' && styles.focusedInput]}
        placeholder="Email"
        onFocus={() => setFocusedInput('email')} 
        onBlur={() => setFocusedInput('')}
      />
      <TextInput 
        style={[styles.input, focusedInput === 'password' && styles.focusedInput]}
        placeholder="Password"  
        secureTextEntry 
        onFocus={() => setFocusedInput('password')} 
        onBlur={() => setFocusedInput('')}
      />
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed', {name: 'Feed'})}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonBackText}>Cadastrar</Text>
        </TouchableOpacity>
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
