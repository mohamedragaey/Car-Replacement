import React from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGenerateClassName, createMuiTheme, fade } from '@material-ui/core/styles'
import { StylesProvider, ThemeProvider as MuiThemeProvider, jssPreset } from '@material-ui/styles'
import { LocalStorageService } from './Services/LocalStorageService'
import Configuration from './Services/Api/Configuration'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
const generateClassName = createGenerateClassName()
let { DefaultFont, DefaultDirection } = Configuration

const ThemeProvider = ({ children }) => {
  const [font, setFont] = React.useState(DefaultFont)
  const [storageDirection, setStorageDirection] = React.useState(DefaultDirection)

  let isSubscribed = false
  React.useEffect(() => {
    // eslint-disable-next-line
    isSubscribed = true
    LocalStorageService.get('CRFontName').then((storageFont) => {
      if (isSubscribed) {
        setFont(storageFont)
      }
    })
    LocalStorageService.get('CRDirection').then((storageDirection) => {
      if (isSubscribed) {
        setStorageDirection(storageDirection)
      }
    })
    return () => isSubscribed = false
  }, [])

  let theme = createMuiTheme({
    direction: storageDirection,
    palette: {
      primary: {
        light: '#3f4f7f',
        main: '#0e2752',
        dark: '#000029',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ffc05c',
        main: '#d2902c',
        dark: '#9c6300',
        contrastText: '#000'
      },
      tertiary: {
        light: '#ee5041',
        main: '#b51318',
        dark: '#7d0000',
        contrastText: '#fff'
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: fade('#000', 0.87)
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: fade('#000', 0.87)
      },
      text: {
        primary: '#282222',
        secondary: '#92929d',
        hint: '#98a9bc'
      },
      colors: {
        offWhite: '#F1F1F1',
        body: '#F5F5F5',
        footer: '#6d6d6d',
        border: '#74727f'
      }
    },
    typography: {
      'fontFamily': font,
      'htmlFontSize': 16,
      'fontSize': 14,
      'fontWeightLight': 300,
      'fontWeightRegular': 400,
      'fontWeightBold': 700
    }
  })

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <Router>
          {children}
        </Router>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default ThemeProvider
