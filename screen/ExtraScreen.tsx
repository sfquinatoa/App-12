import { Button, StyleSheet, Text, Vibration, View } from 'react-native'
import { useFonts } from 'expo-font';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
 

export default function ExtraScreen() {

    //letra
  const [loaded, error] = useFonts({
    'pixel': require('../assets/font/upheavtt.ttf'),
  });
 
//navegador
    const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.youtube.com/');
    setResult(result as any);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'pixel',fontSize: 30 }}>ExtraScreen</Text>
        <Button
        title='presinar'
        onPress={()=> Vibration.vibrate([300,1000, 500,2000])}
        />
        <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})