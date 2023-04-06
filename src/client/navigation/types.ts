import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Receipts: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
