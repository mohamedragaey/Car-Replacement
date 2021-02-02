import React from 'react'
import {create} from 'jss'
import rtl from 'jss-rtl'
import {BrowserRouter as Router} from 'react-router-dom'
import {createGenerateClassName, createMuiTheme} from '@material-ui/core/styles'
import {StylesProvider, ThemeProvider as MuiThemeProvider, jssPreset} from '@material-ui/styles'
import {LocalStorageService} from './Services/LocalStorageService'
import Configuration from './Services/Api/Configuration'

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]})
const generateClassName = createGenerateClassName()
let {DefaultFont, DefaultDirection} = Configuration

const ThemeProvider = ({children}) => {
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
        light: '#edfff8',
        main: '#b51318',
        dark: '#00a36a',
        contrastText: '#000'
      },
      secondary: {
        light: '#79ffc9',
        main: '#6D6D6D',
        dark: '#00a36a',
        contrastText: '#000'
      },
      error: {
        light: '#fff2f4',
        main: '#fc5a5a',
        dark: '#c32130',
        contrastText: '#000'
      },
      success: {
        main: '#29cc8b',
        light: '#e9f9f3'
      },
      info: {
        main: '#50b5ff',
        light: '#edf7ff'
      },
      warning: {
        main: '#ff974a',
        light: '#fff9ec'
      },
      text: {
        primary: '#171725',
        secondary: '#92929d',
        hint: '#98a9bc'
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
