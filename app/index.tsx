import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CarCrash from '../assets/images/car-crash.png'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Index() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={CarCrash} 
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Want to drive safer?</Text>
      <Text style={styles.subtitle}>
        Reduce the risk of road accidents. Drowsy driving detection
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('fillUp')} // Change 'YourTargetScreen' to the desired screen name
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300, // Adjust size as needed
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333333', // Button background color
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});