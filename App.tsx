import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Hello } from './src/components/Hello'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Hello bang={true} style={{ fontSize: 16, fontWeight: 'bold' }}>
        children
      </Hello>
      <Hello>children</Hello>
    </View>
  )
}

export default App
