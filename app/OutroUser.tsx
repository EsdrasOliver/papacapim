import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function OutroUser() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImagesInputs}>
                <View style={styles.containerEditImage}>
                    <Image
                        source={require('../assets/images/pexels-danxavier-1239291.jpg')}
                        style={styles.profile}
                    />
                    <View>
                        <Text style={styles.textUser}>2</Text>
                        <Text>Publicações</Text>
                    </View>
                    <View>
                        <Text style={styles.textUser}>2</Text>
                        <Text>Seguidores</Text>
                    </View>
                    <View>
                        <Text style={styles.textUser}>2</Text>
                        <Text>Seguindo</Text>
                    </View>
                </View>
                <Text>Nome do usuario</Text>
                <Text>Bio</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Seguir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBack}>
                        <Text style={styles.buttonBackText}>Mensagem</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerPhotos}>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                    <View style={styles.photo}></View>
                </View>
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
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textUser: {
        fontSize: 25,
        fontWeight: '700'
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
    },
    containerPhotos: {
        flexDirection: 'row',
        gap: 5
    },
    photo: {
        backgroundColor: '#ccc',
        width: 120,
        height: 200
    },
})