import React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {LanguageConsumer} from '../../LanguageContext'
import {LocalStorageService} from '../../Services/LocalStorageService'
import {useStyles} from './Styles'
import Configuration from '../../Services/Api/Configuration'

const LanguageSwitcher = ({MobileMenu}) => {
  const classes = useStyles()
  const intl = useIntl()
  let {DefaultLocale} = Configuration
  let [active, setActive] = React.useState(DefaultLocale)
  React.useEffect(() => {
    LocalStorageService.get('CRLanguage').then((result) => {
      setActive(result)
    })
  }, [])
  let activeClassAr = active === 'ar' ? classes.active : classes.inActive
  let activeClassEn = active === 'en' ? classes.active : classes.inActive
  let drawerStyle = !!MobileMenu ? classes.MobileMenuLanguageSwitcherButton : ''
  return (
    <LanguageConsumer>
      {({switchToEnglish, switchToArabic}) => (
        <div className={classes.languageSwitcherWrapper} id='languageSwitcher'>
          <button onClick={switchToEnglish}
                  className={classes.languageSwitcherButton + ' ' + activeClassEn + ' ' + drawerStyle}
                  title={intl.formatMessage({id: 'LanguageSwitcher.enLanguage'})}
                  id='enLanguage'
          ><FormattedMessage id='En'/>
          </button>
          <button onClick={switchToArabic}
                  className={classes.languageSwitcherButton + ' ' + classes.languageSwitcherButtonAr + ' ' + activeClassAr + ' ' + drawerStyle}
                  title={intl.formatMessage({id: 'LanguageSwitcher.arLanguage'})}
                  id='arLanguage'
          ><FormattedMessage id='Ar'/>
          </button>
        </div>
      )}
    </LanguageConsumer>
  )
}
export default LanguageSwitcher
