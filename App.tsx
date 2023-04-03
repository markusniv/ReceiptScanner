import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {trpc} from './src/client/trpc';
import {httpBatchLink} from '@trpc/client';
import {MOBILE_DEV_ADDRESS} from './src/utils/constants';
import DashboardScreen from './src/client/screens/dashboardScreen';

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
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <DashboardScreen />
        </SafeAreaView>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
