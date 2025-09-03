
import { ThemeProvider } from '@emotion/react'
import './App.css'
import Portfolio from './Portfolio'
import { getTheme } from './theme'
import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';


function App() {
  // const theme = useTheme()
  const [mode, setMode] = React.useState(localStorage.getItem('Mode') ?? 'light');
  useEffect(() => {
    localStorage.setItem('Mode', mode);
  }, [mode]); // كل ما mode يتغير يتخزن
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  // console.log(mode)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Portfolio mode={mode} setMode={setMode} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
