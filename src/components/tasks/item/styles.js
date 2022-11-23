import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    padding: 10,
    margin: 5,
  },
  itemFinishButton: {
    backgroundColor: '#41aefc',
    color: '#fff',
    fontSize: 12,
    padding: 5,
    marginRight: 8,
    borderRadius: 20,
    alignSelf: 'center',
    width: 'auto',
  },
  itemRemoveButton: {
    backgroundColor: '#41aefc',
    color: '#fff',
    fontSize: 12,
    padding: 5,
    borderRadius: 20,
    alignSelf: 'center',
    width: 'auto',
  },
});
