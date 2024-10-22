import api from "@/api/api";
import { AuthContext } from "@/contexts/AuthProvider";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AlterUser({ navigation }: any) {
    const [focusedInput, setFocusedInput] = useState<string>('')
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const { user, setUser } = useContext(AuthContext)

    const handleSubmit = async () => {
        try {
            const data: any = {
                user: {
                    login: login,
                    name: name,
                    password: password,
                    id: user?.id
                }
            }
            
            await api.patch(`/users/${user?.id}`, data)

            setUser(data)
      
            alert("Usuario alterado com sucesso") 
        } catch (error) {
            console.error(error)
            alert('Login Failed')
        }
    }

    const handleExcluir = async () => {
        try {
            await api.delete(`/users/${user?.id}`)
        
            router.push('/')
        } catch (error) {
            console.error(error)
            alert('Login Failed')
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.containerImagesInputs}>
                <View style={styles.containerEditImage}>
                    <Image
                        source={require('../../assets/images/user.png')}
                        style={styles.profile}
                    />
                    <Text>Editar foto</Text>
                </View>
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
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Concluir</Text>
                </TouchableOpacity>
                
                    <TouchableOpacity style={styles.buttonExcluir} onPress={handleExcluir}>
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                
                <Link href="/tabs/Feeds" asChild>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text style={styles.buttonBackText}>Cancelar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
        marginTop: 20,
        justifyContent: 'space-between',
        height: '100%'
    },
    containerImagesInputs: {
        gap: 15
    },
    containerEditImage: {
        alignItems: 'center',
        gap: 10
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
        gap: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },
    button: {
        backgroundColor: '#1DA1F2',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 110,
        alignItems: 'center'
    },
    buttonExcluir: {
        backgroundColor: '#f21d1d',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 110,
        alignItems: 'center'
    },
    buttonBack: {
        borderColor: '#1DA1F2',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 110,
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