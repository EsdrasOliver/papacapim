import {Feed} from "@/components/Feed";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Feeds() {
  const [focusedInput, setFocusedInput] = useState<string>('')
  const [login, setLogin] = useState<string>("")
  
  const handleSubmit = () => {
    router.push('/Post')
  }

  const search = (login: string) => {
    setLogin(login)
  }
  
  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInputButton}>
        <TextInput 
          style={[styles.input, focusedInput === 'login' && styles.focusedInput]}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
          onFocus={() => setFocusedInput('login')} 
          onBlur={() => setFocusedInput('')}
        />
        <TouchableOpacity style={styles.buttonSearch} onPress={() => search(login)}>
          <Image 
            source={require('../../assets/images/search.png')}
            style={{ width: 15, height: 15, tintColor: '#fff' }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <StatusBar />
          <Feed login={login} />
        </View>
      </ScrollView>
      <View  style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Entypo
            name="plus" color="#fff" size={20}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInputButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    width: '80%',
    padding: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5
  },
  focusedInput: {
    borderColor: '#1DA1F2',
  },
  buttonSearch: {
    borderRadius: 8,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  view: {
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  button: {
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    padding: 20,
    width: 60,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600'
  }
})
