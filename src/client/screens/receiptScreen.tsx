import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {trpc} from '../trpc';
import React, {useEffect, useState} from 'react';
import {ReceiptScreenProps} from '../navigation/types';
import {Role, Status} from '@prisma/client';
import {FAB} from '@rneui/base';
import {
  removeUserSession,
  retrieveUserSession,
} from '../helperFunctions/helperfunctions';

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
  receiptContainer: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    margin: 10,
    width: 300,
  },
  receiptTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  receiptAmountText: {
    fontSize: 18,
  },
  receiptDescriptionText: {
    fontSize: 14,
  },
});

interface ReceiptItemProps {
  id: number;
  title: string;
  description: string;
  amount: number;
  role: Role;
  status: Status;
  accessToken: string;
}
const ReceiptItem = (props: ReceiptItemProps) => {
  const isAdmin = props.role === 'ADMIN';
  const {id, title, amount, description, status, accessToken} = props;
  const statusColor = status === 'OPEN' ? 'orange' : 'green';
  const closeReceipt = trpc.customReceipt.closeReceipt.useMutation();
  return (
    <View style={styles.receiptContainer}>
      <Text style={styles.receiptTitleText}>{title}</Text>
      <Text style={styles.receiptAmountText}>{amount} €</Text>
      <Text style={styles.receiptDescriptionText}>{description}</Text>
      <Text style={{marginTop: 10}}>Receipt status: </Text>
      <Text style={{color: statusColor}}>{status.toLowerCase()}</Text>
      {isAdmin && (
        <Button
          title={'Close receipt'}
          onPress={() => {
            closeReceipt.mutate({
              receiptId: id,
              accessKey: accessToken,
            });
          }}
        />
      )}
    </View>
  );
};
const ReceiptScreen = ({navigation, route}: ReceiptScreenProps) => {
  const {id, username, role, accessToken} = route.params;

  const receiptQuery =
    role === 'USER'
      ? trpc.customReceipt.findUserReceipts.useQuery(id, {
          refetchInterval: 3000,
        })
      : trpc.customReceipt.findAllReceipts.useQuery(null, {
          refetchInterval: 3000,
        });
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'column',
        margin: 20,
        height: '95%',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.titleText}>Hello, {username}!</Text>
        <View style={{marginLeft: 100}}>
          <Button
            title={'Logout'}
            onPress={() => {
              removeUserSession().then(() => {
                navigation.navigate('Login');
              });
            }}
          />
        </View>
      </View>
      <FlatList
        data={receiptQuery.data}
        renderItem={({item}) => (
          <ReceiptItem
            id={item.id}
            title={item.title}
            description={item.description}
            amount={item.amount}
            role={role}
            status={item.status}
            accessToken={accessToken}
          />
        )}
      />
      <FAB
        visible={role !== 'ADMIN'}
        placement={'right'}
        color={'cornflowerblue'}
        title={'+'}
        onPress={() => {
          navigation.navigate('AddReceipt', {id, username, role});
        }}
      />
    </View>
  );
};

export default ReceiptScreen;
