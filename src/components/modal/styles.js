import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalDetailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#67beff',
  },
  modalDetailsText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#243e5c',
    fontWeight: 'bold',
  },
  selectedTask: {
    color: '#243e5c',
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 10,
  },
  modalActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
		padding: 10,
    alignItems: 'center',
    backgroundColor: '#67beff',
    marginTop: 30,
  },
	deleteButton: {
		backgroundColor: '#41aefc',
		color: '#fff',
		fontSize: 12,
		padding: 10,
		marginRight: 10,
		borderRadius: 5,
	},
	cancelButton: {
		backgroundColor: '#41aefc',
		color: '#fff',
		fontSize: 12,
		padding: 10,
		marginLeft: 10,
		borderRadius: 5,
	},
});
