import { en } from "./messages/en";
import { it } from './messages/it';
import { fr} from './messages/fr';
export type Locale = 'en' | 'it' | 'fr';

export const SUPPORTED_LOCALES: Locale[] = ['en','it', 'fr'];

export const DEFAULT_LOCALE: Locale = 'en';

export const messagesMap: Record<Locale, Record<string, string>> = {
  en: en as Record<string,string>,
  it: it as Record<string,string>,
  fr: fr as Record<string,string>,
};
