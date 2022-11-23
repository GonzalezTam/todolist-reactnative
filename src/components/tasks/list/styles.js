import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
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
});
