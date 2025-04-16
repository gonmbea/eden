import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from './locale/en.json';
import prJSON from './locale/pr.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        pr: { ...prJSON }
    },
    lng: "en",
    fallbackLng: "en",

})

// export default i18n;