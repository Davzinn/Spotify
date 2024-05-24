import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Noti from "./assets/Vector.svg";
import Recentes from "@/screens/Home/assets/orientation lock.svg";
import Config from "@/screens/Home/assets/Settings.svg";
import Cards from './CardsADGL';
import ImagesADGL from './ImagesADGL';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.greeting}>Boa Tarde</Text>
        <View style={styles.iconContainer}>
          <Noti width={30} height={30} style={styles.icon} />
          <Recentes width={30} height={30} style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.navigate("Config")}>
            <Config width={30} height={30} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Cards />

      <Text style={styles.sectionTitle}>Episodios para você</Text>
      <ImagesADGL />

      <Text style={styles.sectionTitle}>Recomendado para hoje</Text>
      <ImagesADGL />

      <Text style={styles.sectionTitle}>Mais Tocadas no Mundo</Text>
      <ImagesADGL />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 75,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
