import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {trpc} from './src/client/trpc';
import {httpBatchLink} from '@trpc/client';
import {MOBILE_DEV_ADDRESS, USER_SESSION} from './src/utils/constants';
import LoginScreen from './src/client/screens/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/client/navigation/navigator';
import EncryptedStorage from 'react-native-encrypted-storage';
import {sessionData} from './src/utils/types';

function App(): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: MOBILE_DEV_ADDRESS,
          async headers() {
            return {};
          },
        }),
      ],
    }),
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <NavigationStack />
          </NavigationContainer>
        </SafeAreaView>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
