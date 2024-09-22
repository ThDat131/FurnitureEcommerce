import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './public/locales/en.json';
import translationVN from './public/locales/vn.json';
import translationCN from './public/locales/cn.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        vn: {
            translation: translationVN,
        },
        cn: {
            translation: translationCN,
        },
    },
    lng: 'vn',
    fallbackLng: 'vn',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
