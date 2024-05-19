import React from 'react';
import {ModalPortal} from 'react-native-modals';
import StackNavigation from './src/common/navigation/StackNavigation';
import {AuthProvider} from './src/container/Auth/AuthContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <StackNavigation />
      <ModalPortal />
    </AuthProvider>
  );
}

export default App;
