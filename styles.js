import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
	emptyListContainer: {
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
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
