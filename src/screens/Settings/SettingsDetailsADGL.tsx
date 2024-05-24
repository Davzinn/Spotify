import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Back from './assets/ChevronLeft';
import Direita from "./assets/more";
import Flecha from "@/screens/Settings/assets/Direita";
import Icone from "@/screens/Settings/assets/image 2";
import Image1 from './assets/um'; // Substitua pelo caminho real do componente de ícone
import Image2 from './assets/dois';
import Image3 from './assets/tres'; // Substitua pelo caminho real do componente de imagem

const data = [
  { id: '1', component: <Image1 width={50} height={50} />, title: 'Dia a Dia',description: '0 curtidas', icon: <Flecha width={25} height={25} /> },
  { id: '2', component: <Image2 width={50} height={50} />, title: 'Trabalho',description: '0 curtidas', icon: <Flecha width={25} height={25} /> },
  { id: '3', component: <Image3 width={50} height={50} />, title: 'Best',description: '0 curtidas', icon: <Flecha width={25} height={25} /> },
  { id: '4', title: 'See all 5 playlists', icon: <Flecha width={25} height={25} /> },
];

const renderItem = ({ item }) => (
  <View className='flex-row items-center mb-5 ml-5 mr-5'>
    <View style={styles.iconContainer}>{item.component}</View>
    <View style={styles.textContainer}>
      <Text className='text-white font-semibold text-xl'>{item.title}</Text>
      <Text style={styles.title}>{item.description}</Text>
    </View>
    <View style={styles.imageContainer}>{item.icon}</View>
  </View>
);

const SettingsDetailsADGL = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ConfigScreen')}>
            <Back width={30} height={30} />
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 20 }}>
          <Direita />
        </View>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.iconWrapper}>
          <Icone width={150} height={150} />
        </View>
        <Text style={styles.profileName}>Davi Fernandes</Text>
        <View style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Editar Perfil</Text>
        </View>
      </View>

      <View style={styles.followContainer}>
        <View style={styles.followInfo}>
          <Text style={styles.followCount}>76</Text>
          <Text style={styles.followLabel}>Seguidores</Text>
        </View>
        <View style={styles.followInfo}>
          <Text style={styles.followCount}>76</Text>
          <Text style={styles.followLabel}>Seguindo</Text>
        </View>
      </View>

      <View>
        <Text className='text-2xl text-white font-bold ml-5 mt-5 mb-6'>Playlists</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SettingsDetailsADGL;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#191919',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  iconWrapper: {
    marginBottom: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#3E3F3F',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
  editProfileText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  followInfo: {
    alignItems: 'center',
  },
  followCount: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  followLabel: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection:'column'
  },
  title: {
    fontSize: 12,
    color: '#B3B3B3',
  },
  imageContainer: {
    marginLeft: 10,
  },
});
