import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Um from "@/screens/Home/assets/Images/indie";


type ImageItem = {
  component: React.FC;
  description: string;
};

const images: ImageItem[] = [
  { component: Um, description: 'Ed Sheeran, Big Sean, Juice WRLD, Post Malone' },
  { component: Um, description: 'Ed Sheeran, Big Sean, Juice WRLD, Post Malone' },

];

const RecomendadosADGL: React.FC = () => {
  return (
    <View >
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <item.component />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  description: {
    marginTop: 5,
    textAlign: 'center',
    width:150,
    color: 'white',
  },
});

export default RecomendadosADGL;