import { useContext } from "react";
import { SUPPORTED_LOCALES, type Locale } from "~/i18n";
import { LocaleContext } from "~/i18n/LocaleContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className="border rounded-sm px-2 py-1 w-16 focus-within:outline-2 focus-within:outline-customPurple"
    >
      {SUPPORTED_LOCALES.map((loc) => (
        <option key={loc} value={loc}>
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
