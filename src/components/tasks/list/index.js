import { FlatList, View, Text } from 'react-native';
import { styles } from './styles';

const List = ({ tasksList, renderItem }) => {
	return (
		<FlatList
      style={styles.listContainer}
      data={tasksList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>No pending tasks..</Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
	)
}

export default List;