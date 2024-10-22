import api from "@/api/api";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface FeedProps {
    created_at: string, 
    id: number, 
    post_id: number, 
    updated_at: string, 
    user_login: string
}

interface LoginProps {
    login: string
}

export const Feed: React.FC<LoginProps> = ({ login }) => {
    
    const [feed, setFeed] = useState<FeedProps[]>([])
    const [inputValue, setInputValue] = useState('')
    const [activeFeed, setActiveFeed] = useState<number | null>(null)


    /*const getLike = async (id: number) => {
        try {
            const response = await api.get(`posts/${id}/likes`)
            setLike(response.data)
            console.log(feed)
        } catch (error) {
            console.error(error)
            alert('Like Failed')
        }
    }*/

  
    const handleSend = (id: number) => {
        if (inputValue.trim()) {
            handleSubmit(id, inputValue)
            setInputValue('')
        }
    }

    const getRepliesForPost = (postId: number) => {
        return feed.filter((reply: any) => reply.post_id === postId)
    }

    const getFeed = async () => {
        try {
            const response = await api.get('posts')
            if (login === "") {
                setFeed(response.data)
            } else {
                const filteredFeed = response.data.filter((user: FeedProps) => user.user_login.toLowerCase().includes(login.toLowerCase()))
                
                setFeed(filteredFeed)
            }
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
        
        await api.post(`posts/${id}/replies`, message)
        getFeed()
    }

    const deletePost = async (id: number) => {
        try {
            await api.delete(`posts/${id}`)
            alert('Post deleted')
            getFeed()
        } catch (error) {
            console.error(error)
            alert('Delete Post Failed')
        }
    }

    useEffect(() => {
        getFeed()
    }, [login])

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
                            <TouchableOpacity onPress={() => deletePost(r.id)}>
                                <Entypo
                                    name="cup" color="#a09d9d" size={20}
                                />
                            </TouchableOpacity>
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