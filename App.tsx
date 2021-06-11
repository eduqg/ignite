import React, { useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/pages/Home';
import { light, dark } from './src/styles/theme'



export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ThemeProvider theme={isEnabled ? dark : light} >
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
    </ThemeProvider>
  );
}
