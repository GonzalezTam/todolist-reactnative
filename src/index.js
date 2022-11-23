import { useState } from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';
import { Input, Item, List, ConfirmModal } from './components/index';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [tasksCounter, setTasksCounter] = useState(0);
  const [finishedCounter, setFinishedCounter] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [action, setAction] = useState(null);

  const onHandleChange = (text) => setTask(text);

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

  const onHandleFinish = (id) => {
    setTasksList((prev) => prev.filter((task) => task.id !== id));
    setTask('');
    (tasksCounter > 0) ? setTasksCounter(tasksCounter - 1) : setTasksCounter(0);
    setFinishedCounter(finishedCounter + 1);
    setShowModal(false);
  }

  const renderItem = ({item}) => (
    <Item item={item} onHandleSelect={onHandleSelect} setShowModal={setShowModal} setAction={setAction} />
  )

  return (
    <View style={styles.container}>
      <Input task={task} onHandleAdd={onHandleAdd} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Finished ({finishedCounter})</Text>
        <Text style={styles.listTitle}>To do List ({tasksCounter})</Text>
        <List tasksList={tasksList} renderItem={renderItem} />
        <ConfirmModal showModal={showModal} selectedTask={selectedTask} onHandleDelete={onHandleDelete} onHandleFinish={onHandleFinish} onHandleCancel={onHandleCancel} action={action} />
      </View>
    </View>
  );
}
