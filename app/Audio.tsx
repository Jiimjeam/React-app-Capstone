import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Volume Icon

const AudioScreen = () => {
  const [sound, setSound] = useState();
  const [volume, setVolume] = useState(1.0); // Volume ranges from 0.0 to 1.0
  const navigation = useNavigation();

  const playSound = async () => {
    Alert.alert(
      "Permission to Play Sound",
      "Do you want to allow this app to play the sound?",
      [
        {
          text: "No",
          onPress: () => console.log("Permission denied"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            const { sound } = await Audio.Sound.createAsync(
              require('../assets/Hello.mp3')
            );
            setSound(sound);
            await sound.setVolumeAsync(volume);
            await sound.playAsync();
          },
        },
      ]
    );
  };

  const stopAndResetAudio = async () => {
    if (sound) {
      await sound.pauseAsync();
      await sound.setPositionAsync(0);
    }
  };

  const adjustVolume = async (value) => {
    setVolume(value);
    if (sound) {
      await sound.setVolumeAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Play Sound Button */}
      <View style={styles.buttonContainer}>
        <Button title="Play Sound" onPress={playSound} />
      </View>

      {/* Stop and Reset Button */}
      <View style={styles.buttonContainer}>
        <Button title="Stop and Reset" onPress={stopAndResetAudio} />
      </View>

      {/* Back Button */}
      <View style={styles.buttonContainer}>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>

      {/* Volume Slider with Icon */}
      <View style={styles.volumeContainer}>
        <Ionicons name="volume-high" size={24} color="black" style={styles.volumeIcon} />
        <Slider
          style={styles.slider}
          minimumValue={0.0}
          maximumValue={1.0}
          step={0.1}
          value={volume}
          onValueChange={adjustVolume}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f8f8f8",
  },
  buttonContainer: {
    width: 200,
    marginVertical: 10,
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: 250,
  },
  volumeIcon: {
    marginRight: 10,
  },
  slider: {
    flex: 1,
  },
});

export default AudioScreen;
