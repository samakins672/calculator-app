import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

const GlassCard = ({ children, style }) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <BlurView intensity={50} tint="light" style={StyleSheet.absoluteFill}>
        {children}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default GlassCard;