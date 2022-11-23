import { useState } from 'react';
import { styles } from './styles';
import { Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [tasksCounter, setTasksCounter] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleSelect = (item) => {
    setSelectedTask(item);
    setShowModal(true);
  }

  const onHandleAdd = () => {
    setTasksList((prev) => [...prev, {id: Math.random().toString(), value: task}]);
    setTask('');
    setTasksCounter(tasksCounter + 1);
  }

  const onHandleCancel = () => {
    setShowModal(false);
    setTask('');
    setSelectedTask(null);
  }

  const onHandleDelete = (id) => {
    setTasksList((prev) => prev.filter((task) => task.id !== id));
    setTask('');
    (tasksCounter > 0) ? setTasksCounter(tasksCounter - 1) : setTasksCounter(0);
    setShowModal(false);
  }

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.listItem}>
      <Text style={styles.listTask}>{item.value}</Text>
      <Text onPress={() => { onHandleSelect(item); setShowModal(true)} } style={styles.itemRemoveButton}> X </Text>
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
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyList}>No tasks yet..</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
        <Modal visible={showModal} animationType="fade">
          <View style={styles.modalDetailsContainer}>
            <Text style={styles.modalDetailsText}>Are you sure you want to delete this task?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            <View style={styles.modalActionsContainer}>
              <TouchableOpacity style={styles.deleteButton} onPress={() => onHandleDelete(selectedTask?.id)}>
                <Text style={styles.modalAction}>Delete!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => onHandleCancel()}>
                <Text style={styles.modalAction}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
