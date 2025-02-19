import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import
import VolumeControl from 'react-native-volume-control'; // To manage volume

const Audio = () => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    // Get the current volume when the app starts
    VolumeControl.getVolume().then((currentVolume) => {
      setVolume(currentVolume);
    });
  }, []);

  const handleVolumeChange = (value) => {
    setVolume(value); 
    VolumeControl.setVolume(value); // Set the volume level when slider is moved
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Volume Control</Text>

      <Text style={styles.volumeText}>Current Volume: {Math.round(volume * 100)}%</Text>

      <Slider
        style={styles.slider}
        minimumValue={0} // Minimum volume (0%)
        maximumValue={1} // Maximum volume (100%)
        step={0.01} // Control slider precision (step size)
        value={volume} // Initial value set to current volume
        onValueChange={handleVolumeChange} // Called whenever slider value changes
        minimumTrackTintColor="#FFFFFF" // Color of the part that gets filled
        maximumTrackTintColor="#000000" // Color of the empty part of the slider
        thumbTintColor="#007BFF" // Color of the thumb (slider button)
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  volumeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  slider: {
    width: 300,
    height: 40,
  },
});

export default Audio;
