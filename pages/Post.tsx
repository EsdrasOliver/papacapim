import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Post({ navigation }: any) {
    const [focusedInput, setFocusedInput] = useState<string>('')
    return (
        <View style= {styles.container}>
            <View>
                <View style={styles.containerPhoto}>
                    <Text>Clique e escolha a foto</Text>
                </View>
                <View>
                    <TextInput
                        style={[styles.input, focusedInput === 'textarea' && styles.focusedInput]}
                        placeholder="Digite aqui"
                        onFocus={() => setFocusedInput('textarea')} 
                        onBlur={() => setFocusedInput('')}
                        multiline
                        numberOfLines={4}
                    />
                </View>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.buttonText}>Publicar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Feed')}>
                    <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-between',
        height: '100%'
    },
    containerPhoto: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        marginBottom: 20
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
        marginBottom: 10
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