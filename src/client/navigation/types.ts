import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {Role} from '@prisma/client';

export type RootStackParamList = {
  Login: undefined;
  Receipts: {id: number; username: string; role: Role; accessToken: string};
  AddReceipt: {id: number; username: string; role: Role};
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type ReceiptScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Receipts'
>;

export type AddReceiptScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddReceipt'
>;
