import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResetButton = ({ resetScores }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={resetScores}>
        <Text style={styles.buttonText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ff3333',
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ff3333',
    fontWeight: 'bold',
  },
});

export default ResetButton;
