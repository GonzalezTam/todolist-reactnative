import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [tasksCounter, setTasksCounter] = useState(0);

  const onHandleAdd = () => {
    setTasksList((prev) => [...prev, {id: Math.random().toString(), value: task}]);
    setTask('');
    setTasksCounter(tasksCounter + 1);
  }

  const onHandleDelete = (id) => {
    setTasksList((prev) => prev.filter((task) => task.id !== id));
    setTask('');
    (tasksCounter > 0) ? setTasksCounter(tasksCounter - 1) : setTasksCounter(0);
  }

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.listItem}>
      <Text style={styles.listTask}>{item.value}</Text>
      <Text onPress={() => onHandleDelete(item.id)} style={styles.itemRemoveButton}> X </Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          placeholder="New Task"
          onChangeText={text => setTask(text)}
        />
        <Button title='Add' color="#00a6ff" disabled={!task} onPress={onHandleAdd} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>To do List ({tasksCounter})</Text>
        <FlatList
          style={styles.listContainer}
          data={tasksList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.emptyList}>No tasks yet..</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67beff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 45,
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    width: '80%',
    fontSize: 16,
    color: '#666',
    backgroundColor: '#ffffef',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  listTitle: {
    color: '#243e5c',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItemContainer: {
    marginVertical: 10,
    padding: 5,
    borderRadius: 2,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#00a6ff',
    margin: 3,
    borderRadius: 5,
  },
  listTask: {
    color: '#ffffef',
    fontSize: 16,
    padding: 8,
    margin: 3,
  },
  emptyList: {
    color: '#243e5c',
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  itemRemoveButton: {
    backgroundColor: '#41aefc',
    color: '#fff',
    fontSize: 12,
    padding: 10,
    marginRight: 5,
    borderRadius: 20,
    alignSelf: 'center',
    width: 'auto',
  },
});
