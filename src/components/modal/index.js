import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ConfirmModal = ({ showModal, selectedTask, onHandleDelete, onHandleFinish, onHandleCancel, action }) => {
	return (
		<Modal visible={showModal} animationType="fade">
			<View style={styles.modalDetailsContainer}>
        <Text style={styles.modalDetailsText}>Are you sure you want to {action} this task?</Text>
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        <View style={styles.modalActionsContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={(action === 'delete') ? () => onHandleDelete(selectedTask?.id) : () => onHandleFinish(selectedTask?.id)}>
            <Text>{(action === 'delete') ? 'Delete!' : 'Finish!'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => onHandleCancel()}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
	)
}

export default ConfirmModal;