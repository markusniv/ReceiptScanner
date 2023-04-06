import EncryptedStorage from 'react-native-encrypted-storage';
import {USER_SESSION} from '../../utils/constants';
import {sessionData} from '../../utils/types';

export async function retrieveUserSession() {
  try {
    const session = await EncryptedStorage.getItem(USER_SESSION);

    if (session !== undefined) {
      const data: sessionData = JSON.parse(session as string);
      return data;
    }
    return undefined;
  } catch (e) {
    return {
      message: 'Not logged in.',
    };
  }
}
