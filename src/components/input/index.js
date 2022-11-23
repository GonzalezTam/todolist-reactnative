import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { styles } from './styles';

const Input = ({ task, onHandleAdd, onHandleChange }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				value={task}
				placeholder="New Task"
				onChangeText={onHandleChange}
			/>
			<Button title='Add' color="#00a6ff" disabled={!task} onPress={onHandleAdd} />
	</View>
	);
}

export default Input;