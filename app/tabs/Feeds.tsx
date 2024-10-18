import api from "@/api/api";
import Feed from "@/components/Feed";
import { AuthContext } from "@/contexts/AuthProvider";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Feeds() {
  const {user} = useContext(AuthContext)

  

  const handleSubmit = () => {
    router.push('/Post')
  }

  useEffect(() => {
    console.log(user)
  })
  
  return ( 
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <StatusBar />
          <Feed />
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
