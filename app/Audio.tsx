import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Volume Icon

const AudioScreen = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const navigation = useNavigation();

  // Load and play sound when screen is focused
  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/Hello.mp3')
      );
      setSound(sound);
      await sound.setVolumeAsync(volume);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);

  // Stop audio when leaving the screen
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (sound) {
          sound.stopAsync();
          sound.unloadAsync();
          setIsPlaying(false);
        }
      };
    }, [sound])
  );

  // Toggle Play / Pause
  const togglePlayPause = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  // Stop and Reset Audio
  const stopAndResetAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.setPositionAsync(0);
      setIsPlaying(false);
    }
  };

  // Adjust Volume
  const adjustVolume = async (value) => {
    setVolume(value);
    if (sound) {
      await sound.setVolumeAsync(value);
    }
  };

  // Handle navigation (stops sound when exiting)
  const handleExit = () => {
    if (sound) {
      sound.stopAsync();
      sound.unloadAsync();
      setIsPlaying(false);
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Play / Pause Button */}
      <View style={styles.buttonContainer}>
        <Button
          title={isPlaying ? 'Pause Sound' : 'Play Sound'}
          onPress={togglePlayPause}
        />
      </View>

      {/* Stop and Reset Button */}
      <View style={styles.buttonContainer}>
        <Button title="Stop and Reset" onPress={stopAndResetAudio} />
      </View>

      {/* Back Button (Stops Sound on Exit) */}
      <View style={styles.buttonContainer}>
        <Button title="Back to Home" onPress={handleExit} />
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
