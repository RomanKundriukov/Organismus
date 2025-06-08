import i18n from 'i18next'
import {initReactI18next } from 'react-i18next';

import en from '../assets/locales/en/translation.json'
import de from '../assets/locales/de/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        de: {translation: de}
    },
    lng: localStorage.getItem('language') || 'de',
    fallback: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n;