import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchInfo = ({ scoreA, scoreB }) => {
  const teamA = "Real Madrid";
  const teamB = "Barcelona";

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <View style={styles.scoreBox}>
          <Text style={styles.score}>{scoreA}</Text>
        </View>
      </View>
      <Text style={styles.vs}>VS</Text>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <View style={styles.scoreBox}>
          <Text style={styles.score}>{scoreB}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center', // Mengatur agar posisi tim lebih terpusat
    width: '100%',
  },
  teamContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  scoreBox: {
    width: 80,
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  vs: {
    fontSize: 18,
    marginVertical: 10,
    color: '#555',
  },
});

export default MatchInfo;
