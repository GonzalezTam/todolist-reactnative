import React from "react";
import { Text, View } from 'react-native';
import { styles } from './styles';

const Item = ({ item, onHandleSelect, setShowModal, setAction }) => {
	return (
		<View key={item.id} style={styles.listItem}>
			<Text style={styles.listTask}>{item.value}</Text>
			<View style={styles.listItem}>
				<Text onPress={() => { onHandleSelect(item); setShowModal(true); setAction('finish')} } style={styles.itemFinishButton}> ✔ </Text>
				<Text onPress={() => { onHandleSelect(item); setShowModal(true); setAction('delete')} } style={styles.itemRemoveButton}> X </Text>
			</View>
		</View>
	)
}

export default Item;