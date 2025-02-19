import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import your local image
// import LocalImage from './assets/car-image.png'; 

const FillUp = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleProceed = () => {
    if (name.trim() === '') {
      // Show an alert or error message if the name is empty
      Alert.alert('Error', 'Please enter your name before proceeding.');
    } else {
      // Navigate to the next page if the name is filled
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.topSection}>
        <Image source={LocalImage} style={styles.image} />
      </View> */}
      <View style={styles.bottomSection}>
        <Text style={styles.greeting}>Hi, let’s get ready</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fullname</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleProceed}
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#333333',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FillUp;