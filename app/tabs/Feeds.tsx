import Feed from "@/components/Feed";
import { AuthContext } from "@/contexts/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Feeds() {
  const {user} = useContext(AuthContext)

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
    padding: 10
  }
})
