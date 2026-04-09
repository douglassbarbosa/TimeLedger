import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TimeLedger</Text>
        <Text style={styles.subtitle}>Project foundation initialized.</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    color: '#6b7280',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
});
