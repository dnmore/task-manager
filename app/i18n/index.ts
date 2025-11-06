import { en } from "./messages/en";
import { it } from './messages/it';
import { fr} from './messages/fr';
import { de} from './messages/de';
export type Locale = 'en' | 'it' | 'fr' | 'de';

export const SUPPORTED_LOCALES: Locale[] = ['en','it', 'fr', 'de'];

export const DEFAULT_LOCALE: Locale = 'en';

export const messagesMap: Record<Locale, Record<string, string>> = {
  en: en as Record<string,string>,
  it: it as Record<string,string>,
  fr: fr as Record<string,string>,
  de: de as Record<string,string>,
};
