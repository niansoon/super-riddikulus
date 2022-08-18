import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './src/styles/Stylesheet';
import SpellTypeScreen from './src/screens/SpellTypeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SpellTypeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
