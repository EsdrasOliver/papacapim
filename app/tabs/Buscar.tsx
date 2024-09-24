import api from "@/api/api"
import { AuthContext } from "@/contexts/AuthProvider"
import { Seguindo } from "@/hooks/Seguindo"
import { useContext, useEffect, useState } from "react"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Buscar() {
    const [users, setUsers] = useState([])
    const [followers, setFollowers] = useState([])

    const [jaSegue, setJaSegue] = useState(false)
    const {user} = useContext(AuthContext)

    const getUsers = async () => {
        try {
            const response = await api.get('users')
            setUsers(response.data)
            response.data.map((user: any) => {
                //console.log(user.login)
                getFollowers(user.login)
            })
        } catch (error) {
            console.error(error)
            alert('Get Users Failed')
        }
    }

    const getFollowers = async (login: string) => {
        
        try {
            const response = await api.get(`/users/${login}/followers`)

            response.data.forEach((element: any) => {
                if(element.follower_login == user?.user_login){
                    setJaSegue(true)
                }
            })

            //console.log(response.data)

            //setFollowers(response.data.map((follower: any) => follower.login))
        } catch (error) {
            console.error(error)
            //alert('Get Followers Failed')
        }
    }

    const follower = async (login: string) => {
        try {
            if(jaSegue) {
                const response = await api.delete(`/users/${user}/followers/0`)
                if(response) setJaSegue(false)
            } else {
                const response = await api.post(`/users/${login}/followers`)
                if(response) setJaSegue(true)
            }
        } catch (error) {
            console.error(error)
            alert('Follower Failed')
        } 
    }

    const notFollower = async (login: string) => {
        try {
            await api.delete(`/users/${login}/followers`)
    
            alert(`Deixando de seguir ${login}`)

            getFollowers(login)
        } catch (error) {
            console.error(error)
            alert('Follower Failed')
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.search}>
                <Image 
                    source={require('../../assets/images/search.png')}
                    style={{ width: 15, height: 15 }}
                />
            </Text>
            <ScrollView>
                {users.map((item: any) => (
                    <View style={styles.user} key={item.id}>
                        <Text>{item.login}</Text>
                        <Text>{item.name}</Text>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => follower(item.login)}>
                                <Text style={styles.buttonText}>Seguir</Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/*{followers == item.login ? (
                            <TouchableOpacity style={styles.buttonNotFollower} onPress={() => notfollower(item.login)}>
                                <Text style={styles.buttonNotFollowerText}>Deseguir</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={styles.button} onPress={() => follower(item.login)}>
                                <Text style={styles.buttonText}>Seguir</Text>
                            </TouchableOpacity>
                        )}*/}
                        
                    </View>
                ))}
            </ScrollView>
            <View style={styles.view}>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#fff',
        gap: 10
    },
    view: {
        padding: 10
    },
    search: {
        backgroundColor: '#e2e2e2',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    user: {
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#cecece',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        gap: 3
    },
    button: {
        backgroundColor: '#1DA1F2',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 110,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600'
    },
    buttonNotFollower: {
        borderColor: '#1DA1F2',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 110,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    buttonNotFollowerText: {
        color: '#1DA1F2'
    }
})
