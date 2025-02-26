import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { Audio } from 'expo-av'; // Import Audio from expo-av

const AudioScreen = () => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    // Ask the user for permission to play the sound
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
              require('../assets/Hello.mp3') // Your audio file path
            );
            setSound(sound);
            await sound.playAsync(); // Play the sound
          },
        },
      ]
    );
  };

  const stopAndResetAudio = async () => {
    if (sound) {
      // Pause the sound
      await sound.pauseAsync();
      // Reset the playtime to the beginning
      await sound.setPositionAsync(0);
    }
  };

  return (
    <View>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop and Reset" onPress={stopAndResetAudio} />
    </View>
  );
};

export default AudioScreen;
