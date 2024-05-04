import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './layout/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
