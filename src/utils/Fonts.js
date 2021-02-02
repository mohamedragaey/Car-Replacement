import WebFont from 'webfontloader'
import './fonts.css'

const GoogleFonts = () => {
  WebFont.load({
    google: {
      families: ['Cairo:400,700,600&display=swap']
    }
  })
}

export default GoogleFonts
export const Avenir = 'Avenir'
export const EnglishFont = Avenir
export const ArabicFont = 'Cairo'
