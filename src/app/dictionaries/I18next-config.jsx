import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_es from './messagesES.json';
import global_en from './messagesEn.json';

const options = {
    order: ['querystring',  'navigator']
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    detection: options,
    fallbackLng: "es",
    resources:{
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        }
    }
})