import { Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Profile({ navigation }: any) {
    const [focusedInput, setFocusedInput] = useState<string>('')
    return (
        <View style={styles.container}>
            <View style={styles.containerImagesInputs}>
                <View style={styles.containerEditImage}>
                    <Image
                        source={require('../assets/images/pexels-danxavier-1239291.jpg')}
                        style={styles.profile}
                    />
                    <Text>Editar foto</Text>
                </View>
                
                <TextInput
                    style={[styles.input, focusedInput === 'name' && styles.focusedInput]}
                    placeholder="Nome"
                    onFocus={() => setFocusedInput('name')} 
                    onBlur={() => setFocusedInput('')}
                />
                <TextInput
                    style={[styles.input, focusedInput === 'nameUser' && styles.focusedInput]}
                    placeholder="Nome de usuario"
                    onFocus={() => setFocusedInput('nameUser')} 
                    onBlur={() => setFocusedInput('')}
                />
                <TextInput
                    style={[styles.input, focusedInput === 'bio' && styles.focusedInput]}
                    placeholder="Bio"
                    onFocus={() => setFocusedInput('bio')} 
                    onBlur={() => setFocusedInput('')}
                />
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.buttonText}>Concluir</Text>
                </TouchableOpacity>
                <Link href="/AlterUser" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Alterar</Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.buttonBackText}>Cancelar</Text>
                </TouchableOpacity>
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