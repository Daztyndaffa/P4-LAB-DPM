import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ScoreButtons = ({ updateScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('A', 1)}>
          <Text style={styles.buttonText}>Team A +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('A', -1)}>
          <Text style={styles.buttonText}>Team A -</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('B', 1)}>
          <Text style={styles.buttonText}>Team B +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateScore('B', -1)}>
          <Text style={styles.buttonText}>Team B -</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingHorizontal: 20, // Jarak dari tepi layar
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    padding: 15,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ScoreButtons;
