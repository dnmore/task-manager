import { createContext } from "react";
import type { Locale } from ".";


export const LocaleContext = createContext({
    locale: "",
    setLocale: (locale : Locale) => {}
})