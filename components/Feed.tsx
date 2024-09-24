import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Feed() {
    return (
        <View style={styles.feed}>
            <View style={styles.imageText}>
                <Image
                    source={require('../assets/images/pexels-danxavier-1239291.jpg')}
                    style={{width:50, height:50,borderRadius: 50}}
                />
                <Link href="/AlterUser">
                    <Text>Clique aqui para alterar</Text>
                </Link>   
            </View>
            <View>
                <Image
                    source={require('../assets/images/pexels-danxavier-1239291.jpg')}
                    style={{width:'100%', height:200,}}
                />
            </View>
            <View style={styles.containerInteragi}>
                <Text>Curtir</Text>
                <Text>Comentar</Text>
                <Text>Compartilhar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    feed: {
        flexDirection: 'column',
        gap: 10
    },
    imageText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 10,
        marginTop: 10
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    
    containerInteragi: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})