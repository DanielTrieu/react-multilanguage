import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/locales/en/translation.json";
import translationZH from "./assets/locales/zh/translation.json";
import translationFR from "./assets/locales/fr/translation.json";

const fallbackLng = ["fr"];
const availableLanguages = ["en", "zh", "fr"];

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: true,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });
  console.log(availableLanguages)

export default i18n;
