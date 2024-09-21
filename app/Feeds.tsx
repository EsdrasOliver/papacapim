import Feed from "@/components/Feed";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";

export default function Feeds() {
    const [focusedInput, setFocusedInput] = useState<string>('')
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
  
  });
