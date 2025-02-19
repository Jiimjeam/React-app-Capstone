import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Ensure you have installed @expo/vector-icons
import carAbout from '../assets/images/ai.png';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            
            {/* Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={carAbout} 
                    style={styles.image}
                />
            </View>

            {/* About Section */}
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About</Text>
                <Text style={styles.aboutText}>
                    This app leverages advanced technology and artificial
                    intelligence to enhance road safety by monitoring driver behavior and
                    detecting early signs of drowsiness. By identifying indicators such as
                    eye closure, yawning, and head movements, AGA aims to prevent
                    accidents and save lives through timely alerts and interventions.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    header: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        // Optional: Add styling if needed
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "flex-end", // Moves the image to the right
        paddingRight: -10, // Adds spacing from the right edge
    },
    image: {
        width: 300,
        height: 300,
       marginRight: 35,
    },
    aboutContainer: {
        flex: 3,
        backgroundColor: "#333333",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },
    aboutTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    aboutText: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 24,
    },
});

export default AboutScreen;
