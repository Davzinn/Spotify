import { StyleSheet, Text, View } from 'react-native';
import "@/styles/global.css"
import Navigation from '@/routes/StackNavigatorADGL';

export default function App() {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
