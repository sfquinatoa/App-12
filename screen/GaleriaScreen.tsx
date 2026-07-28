import { useState } from 'react';
import { Alert, Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Supabase } from '../config/SupaBase';
import { File, Directory, Paths } from 'expo-file-system';

export default function GaleriaScreen() {
  
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function subirImagen(){
    const avatarFile = await new File (image as string).bytes()
    const { data, error } = await Supabase
  .storage
  .from('jugadores')
  .upload('public/avatar1.png', avatarFile, {
    contentType:'image/jpeg',
    cacheControl: 'no-cache',
    upsert: false
  })
  console.log(error);

  }

  return (
    <View style={styles.container}>
      <Button title="Abrir imagen" onPress={pickImage} />
      <Button title="Subir imagen" onPress={subirImagen} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});