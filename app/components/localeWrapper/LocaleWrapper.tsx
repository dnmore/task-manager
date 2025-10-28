"use client"

import { IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, messagesMap, type Locale } from "~/i18n";
import { useState } from "react";
import { LocaleContext } from "~/i18n/LocaleContext";

export function LocaleWrapper({ children }: { children: React.ReactNode }){
    // const locale: Locale = DEFAULT_LOCALE
const [locale, setLocale] = useState(DEFAULT_LOCALE)
 

  return (
    <LocaleContext.Provider value={{ locale, setLocale}}>
    <IntlProvider
      locale={locale}
      defaultLocale={DEFAULT_LOCALE}
      messages={messagesMap[locale]}
    >
     {children}
    </IntlProvider></LocaleContext.Provider>
  );
}