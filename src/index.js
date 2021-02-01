import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import {LanguageProvider} from './LanguageContext'
import {GeneralProvider} from './GeneralContext'
import ThemeProvider from './ThemeProvider'
import Layout from './components/Layout'
import * as serviceWorker from './serviceWorker'
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <>
    <GoogleReCaptchaProvider reCaptchaKey="6Le9HMoZAAAAAMNBHlXml3FFsr5ShzFs0O0_5sFD">
      <Router forceRefresh={false}>
        <LanguageProvider>
          <GeneralProvider>
            <ThemeProvider>
              <Layout/>
            </ThemeProvider>
          </GeneralProvider>
        </LanguageProvider>
      </Router>
    </GoogleReCaptchaProvider>
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
