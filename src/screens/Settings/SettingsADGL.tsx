import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Back from './assets/ChevronLeft';
import { StatusBar } from 'expo-status-bar';
import Flecha from "@/screens/Settings/assets/Direita"
import Icone from "@/screens/Settings/assets/image 2"



interface Item {
  id: string;
  text: string;
}

const data: Item[] = [
  { id: '1', text: 'Conta' },
  { id: '2', text: 'Economia de dados ' },
  { id: '3', text: 'Idiomas' },
  { id:'4', text: 'Reprodução'},
  { id: '5', text: 'Conteúdo explícito'},
  { id: '6', text: 'Dispositivos'},
  { id: '7', text: 'Carro' },
  { id: '8', text: 'Redes sociais' },
  { id: '9', text: 'Assistentes de voz e aplicativos' }
];
const renderItem = ({ item }: { item: Item }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }} className='justify-between mb-4'>
    <Text style={{ marginLeft: 10 }} className='text-white font-normal text-xl'>{item.text}</Text>
    <Flecha width={25} height={25}/>
  </View>
);

export default function SettingsADGL() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#191919" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Back width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Configurar</Text>
      </View>
<TouchableOpacity onPress={()=> navigation.navigate("ConfigDetails")}>
      <View className='flex flex-row items-center justify-between my-8' >
        <View className='flex-none w-14 ml-5'>
          <Icone width={70} height={70}/>
        </View>
        <View className='grow ml-12 '>
          <Text className='font-bold text-white text-2xl'>Davi Fernandes</Text>
          <Text  style={{color:'#B3B3B3'}}className=' text-white text-sm mt-1.5'>Ver Perfil</Text>

        </View>
        <View className='mr-flex-none mr-4x'>
        <Flecha width={25} height={25}/>
        </View>
      </View>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#191919',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
