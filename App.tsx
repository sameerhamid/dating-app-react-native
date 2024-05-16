import React from 'react';
import {ModalPortal} from 'react-native-modals';
import StackNavigation from './src/common/navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <>
      <StackNavigation />
      <ModalPortal />
    </>
  );
}

export default App;
