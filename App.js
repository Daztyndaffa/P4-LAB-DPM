import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Modal, View, Text, TouchableOpacity } from 'react-native';
import MatchInfo from './src/components/MatchInfo';
import ScoreButtons from './src/components/ScoreButtons';
import ResetButton from './src/components/ResetButton';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const updateScore = (team, increment) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + increment);
      setTeamAScore(newScore);
      if (newScore === 10) {
        setWinner('Real Madrid'); // Mengubah nama tim A
        setModalVisible(true);
      }
    } else {
      const newScore = Math.max(0, teamBScore + increment);
      setTeamBScore(newScore);
      if (newScore === 10) {
        setWinner('Barcelona'); // Mengubah nama tim B
        setModalVisible(true);
      }
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MatchInfo scoreA={teamAScore} scoreB={teamBScore} />
      <ScoreButtons updateScore={updateScore} />
      <ResetButton resetScores={resetScores} />

      {/* Modal for winner announcement */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Congratulations!</Text>
            <Text style={styles.modalWinner}>{winner} Wins!</Text>
            <TouchableOpacity style={styles.closeButton} onPress={resetScores}>
              <Text style={styles.closeButtonText}>Reset Match</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#e3f2fd',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  modalWinner: {
    fontSize: 20,
    marginVertical: 10,
    color: '#007bff',
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#ff3333',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
