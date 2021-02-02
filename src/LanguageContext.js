import React, { createContext } from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import arMessages from './translations/ar.json'
import enMessages from './translations/en.json'
import GoogleFonts, { ArabicFont, EnglishFont } from './utils/Fonts'
import Configuration from './Services/Api/Configuration'
import { LocalStorageService } from './Services/LocalStorageService'

let { DefaultLocale, DefaultDirection, DefaultFont, DefaultMessage } = Configuration

const LanguageContext = createContext({})

const LanguageProvider = ({ children }) => {
  const [dir, setDir] = React.useState(DefaultDirection)
  const [locale, setLocale] = React.useState(DefaultLocale)
  const [font, setFont] = React.useState(DefaultFont)
  const [messages, setMessages] = React.useState(DefaultMessage)
  const [loading, setLoading] = React.useState(true)

  // empty array as second argument equivalent to componentDidMount
  let isSubscribed = false
  React.useEffect(() => {
    GoogleFonts()
    // eslint-disable-next-line
    isSubscribed = true
    getAppLanguage()
    return () => isSubscribed = false
  }, [])

  const switchToEnglish = () => {
    setLoading(true)
    setMessages(enMessages)
    setLocale('en')
    setDir('ltr')
    setFont(EnglishFont)
    LocalStorageService.setMultiple({
      'CRLanguage': 'en',
      'CRDirection': 'ltr',
      'CRFontName': EnglishFont
    })
    setLoading(false)
  }

  const switchToArabic = () => {
    setLoading(true)
    setMessages(arMessages)
    setLocale('ar')
    setDir('rtl')
    setFont(ArabicFont)
    LocalStorageService.setMultiple({
      'CRLanguage': 'ar',
      'CRDirection': 'rtl',
      'CRFontName': ArabicFont
    })
    setLoading(false)
  }


  const getAppLanguage = async () => {
    if (isSubscribed) {
      setLoading(true)
      let lang = await LocalStorageService.get('CRLanguage') ? await LocalStorageService.get('CRLanguage') : locale
      if (lang === 'ar') {
        switchToArabic()
      } else {
        switchToEnglish()
      }
      setLoading(false)
    }
  }

  const switchOnSelect = (value) => {
    value.target.value === 'ar' ? switchToArabic() : switchToEnglish()
  }

  let title = 'Car Replacement'
  return (
    !!loading ? '' :
      <LanguageContext.Provider value={{
        locale, messages, dir, loading, font,
        switchToArabic,
        switchToEnglish,
        switchOnSelect
      }}
      >
        <Helmet>
          <html lang={locale} dir={dir}/>
          <body dir={dir}/>
          <title>{title}</title>
        </Helmet>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale={DefaultLocale}
        >
          {children}
        </IntlProvider>
      </LanguageContext.Provider>
  )
}


const LanguageConsumer = LanguageContext.Consumer

export { LanguageProvider, LanguageConsumer }
