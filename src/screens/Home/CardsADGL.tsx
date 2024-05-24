import { StyleSheet, View } from 'react-native';
import React from 'react';
import Um from "@/screens/Home/assets/Images/1000 Forms Of Fear";
import Dois from "@/screens/Home/assets/Images/Augustten Ft Jhesy";
import Tres from "@/screens/Home/assets/Images/A Place We Knew";
import Quatro from "@/screens/Home/assets/Images/quatro";
import Cinco from "@/screens/Home/assets/Images/Liked Songs";
import Seis from "@/screens/Home/assets/Images/seis";

export default function Cards() {
  return (
    <View className="mt-8">
      <View style={styles.row}>
        <View style={styles.column}>
          <Cinco />
        </View>
        <View style={styles.column}>
          <Dois />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Tres />
        </View>
        <View style={styles.column}>
          <Quatro />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Seis />
        </View>
        <View style={styles.column}>
          <Um />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
