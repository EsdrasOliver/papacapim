import api from '@/api/api';
import { Link } from 'expo-router';
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Cadastro({ navigation }: any) {
    const [focusedInput, setFocusedInput] = useState<string>('')
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async () => {
        if (password !== passwordConfirmation) {
            alert('Senhas diferentes')
            return
        }

        try {
            const user = {
                login: login,
                name: name,
                password: password,
                password_confirmation: passwordConfirmation
            }
            
            await api.post('users', {user})
      
            alert('Cadastro feito com sucesso')
        } catch (error) {
            console.error(error)
            alert('Login Failed')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastro</Text>
            <TextInput 
                style={[styles.input, focusedInput === 'login' && styles.focusedInput]}
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
                onFocus={() => setFocusedInput('login')} 
                onBlur={() => setFocusedInput('')}
            />
            <TextInput 
                style={[styles.input, focusedInput === 'name' && styles.focusedInput]}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                onFocus={() => setFocusedInput('name')} 
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
            <TextInput 
                style={[styles.input, focusedInput === 'password_confirmation' && styles.focusedInput]}
                placeholder="Confirma a senha" 
                secureTextEntry
                value={passwordConfirmation}
                onChangeText={setPasswordConfirmation}
                onFocus={() => setFocusedInput('password_confirmation')} 
                onBlur={() => setFocusedInput('')}
            />
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleSubmit}>Cadastrar</Text>
                </TouchableOpacity>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text style={styles.buttonBackText}>Voltar</Text>
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