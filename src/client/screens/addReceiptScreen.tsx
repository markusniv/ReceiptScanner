import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {trpc} from '../trpc';
import {AddReceiptScreenProps} from '../navigation/types';

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 12,
    width: '80%',
    borderWidth: 1,
    padding: 10,
  },
  inputMultiline: {
    height: 200,
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
});
const AddReceiptScreen = ({navigation, route}: AddReceiptScreenProps) => {
  const {id, username, role} = route.params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const createReceipt = trpc.customReceipt.createOneReceipt.useMutation();

  return (
    <View
      style={{
        alignItems: 'center',
        margin: 20,
        justifyContent: 'center',
        height: '100%',
      }}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>Enter receipt information</Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder={'Title'}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          value={amount}
          placeholder={'Amount (€)'}
          onChangeText={setAmount}
        />
        <TextInput
          style={[styles.input, styles.inputMultiline]}
          value={description}
          placeholder={'Description'}
          onChangeText={setDescription}
        />
        <Button
          title={'Create receipt'}
          onPress={() => {
            const amountFloat = parseFloat(amount);
            createReceipt.mutate({
              title,
              description,
              amount: amountFloat,
              userId: id,
            });
            navigation.navigate('Receipts', {id, username, role});
          }}
        />
      </View>
    </View>
  );
};

export default AddReceiptScreen;
