import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/car-crash.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.imageText}>AI-Based Drowsiness Detection</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.startSessionButton]} 
          onPress={() => navigation.navigate('camera')}
        >
          <Text style={styles.buttonText}>Start Session</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.audioSettingsButton]} 
          onPress={() => navigation.navigate('Audio')}
        >
          <Text style={styles.buttonText}>Audio Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.aboutButton]} 
          onPress={() => navigation.navigate('about')}
        >
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  imageText: {
    marginTop: -40, 
    fontSize: 25,  
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,  
    paddingHorizontal: 40,  
    borderRadius: 30,
    marginVertical: 15,
  },
  startSessionButton: {
    alignSelf: 'flex-end', 
    marginRight: -30, 
  },
  audioSettingsButton: {
    alignSelf: 'flex-start', 
    marginLeft: -35, 
  },
  aboutButton: {
    alignSelf: 'flex-end', 
    marginRight: -30, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});

export default Home;
