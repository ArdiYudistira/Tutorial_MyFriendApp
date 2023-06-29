// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import Route from './src/route';

function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

export default App;
