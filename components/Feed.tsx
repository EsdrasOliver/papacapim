import api from "@/api/api";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Feed() {
    
    const [feed, setFeed] = useState([])

    //const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [activeFeed, setActiveFeed] = useState<number | null>(null)

  
    const handleSend = (id: number) => {
        if (inputValue.trim()) {
            handleSubmit(id, inputValue)
            setInputValue('')
            //setShowInput(false)
        }
    }

    const getRepliesForPost = (postId: number) => {
        return feed.filter((reply: any) => reply.post_id === postId);
    }

    const getFeed = async () => {
        try {
            const response = await api.get('posts')
            setFeed(response.data)
            console.log(feed)
        } catch (error) {
            console.error(error)
            alert('Feed Failed')
        }
    }

    const handleSubmit = async (id: number, msg: string) => {
        const message = {
            reply: {
                message: msg
            }
        }
        //console.log(message)
        //console.log(id)
        await api.post(`posts/${id}/replies`, message)
    }

    useEffect(() => {
        getFeed()
    }, [])

    return (
        <View>
            {feed
            .filter((r: any) => r.post_id === null)
            .map((r: any, index: any) => (
                <View key={index} style={styles.feed}>
                    <View style={styles.containerMgs}>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>{r.user_login}</Text>
                            <Text>{r.message}</Text>
                        </View>
                        <View style={styles.containerIcons}>
                            <Entypo
                                name="heart" color="red" size={20}
                            />
                            {/*<Entypo
                                name="heart-outlined" color="red" size={20}
                            />*/}
                            <Entypo
                                name="cup" color="#a09d9d" size={20}
                            />
                        </View>
                    </View>
                    {activeFeed === r.id ? (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Escreva sua resposta..."
                                value={inputValue}
                                onChangeText={setInputValue}
                            />
                            <TouchableOpacity style={styles.sendButton} onPress={() => handleSend(r.id)}>
                                <Text style={styles.enviar}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={() => setActiveFeed(r.id)}>
                            <Text style={styles.responder}>Responder</Text>
                        </TouchableOpacity>
                    )}
                    {getRepliesForPost(r.id).map((reply: any, replyIndex: any) => (
                        <View key={replyIndex} style={styles.replyContainer}>
                            <Text style={styles.replyUser}>{reply.user_login}</Text>
                            <Text style={styles.replyMessage}>{reply.message}</Text>
                        </View>
                    ))}
                </View>
                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    feed: {
        
    },
    containerMgs: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerTitle: {

    },
    containerIcons: {
        flexDirection: 'row',
        gap: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    responder: {
        padding: 10,
        color: '#1DA1F2',
        fontWeight: '700',
        marginLeft: 20,
        marginTop: -10 
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginRight: 8,
    },
    sendButton: {
        borderRadius: 10,
        backgroundColor: '#1DA1F2',
        padding: 10
    },
    enviar: {
        color: '#fff'
    },

    replyContainer: {
        paddingLeft: 20,
        marginTop: 10,
        borderLeftWidth: 2,
        borderLeftColor: 'gray',
    },
    replyUser: {
        fontWeight: 'bold',
    },
    replyMessage: {
        marginTop: 5,
    }
})