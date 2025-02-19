import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const rootLayout = () => {
  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown: false}}/>
    <Stack.Screen name='fillUp' options={{headerShown: false}}/>
    <Stack.Screen name='Home' options={{headerShown: false}}/>
    <Stack.Screen name='about' options={{headerShown: false}}/>
    <Stack.Screen name='Audio' options={{headerShown: false}}/>
    <Stack.Screen name='camera' options={{headerShown: false}}/>
   </Stack>
  )
}
export default rootLayout

