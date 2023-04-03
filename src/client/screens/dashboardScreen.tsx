import React, {Component, useEffect, useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {trpc} from '../trpc';
import {User} from '../../utils/types';

const userList: User[] = [
  {
    id: 0,
    name: 'Matt',
  },
  {
    id: 1,
    name: 'Katt',
  },
];
const DashboardScreen = () => {
  const receiptList = trpc.receipt.findAllReceipt.useQuery();

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Testing tRPC</Text>
      <FlatList
        data={receiptList.data}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

export default DashboardScreen;

/*
      <Button
        title={'Create user'}
        onPress={() => {
          userCreator.mutate({
            data: {text: 'this is a test text'},
          });
        }}
      />
 */
