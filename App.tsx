import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import Constants from 'expo-constants'
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
