import { View, StyleSheet, Button } from 'react-native';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../assets/audio/audio.mp3')

export default function AudioScreen() {
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => player.play()} />
      <Button title="Pausar" onPress={() => player.pause()} />
      <Button
        title="Replay Sound"
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});