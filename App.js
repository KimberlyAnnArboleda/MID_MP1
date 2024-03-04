import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
    setEnteredGoalText('');
  };

  const getRainbowColor = index => {
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B00B2', '#8B00FF']; //colors
    return { backgroundColor: colors[index % colors.length] };
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="My Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={({ item, index }) => (
          <View style={[styles.goalsContainer, getRainbowColor(index)]}>
            <Text style={styles.textF}>&#8226; {item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },

  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    paddingTop: 20,
    padding: 10,
  },

  mytext: {
    paddingTop: 20,
  },

  textF: {
    fontSize: 20,
  },
});
