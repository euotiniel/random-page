import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import Theme from "./styles/theme/theme.ts";
import GlobalStyles from './styles/global.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>

  </React.StrictMode>,
)
