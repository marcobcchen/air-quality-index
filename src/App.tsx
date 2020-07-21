import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './views/theme'
import AirQualityIndex from './views/AirQualityIndex'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AirQualityIndex/>
    </ThemeProvider>
  );
}

export default App;
