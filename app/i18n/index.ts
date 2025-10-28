import { en } from "./messages/en";
import { it } from './messages/it';
export type Locale = 'en' | 'it';

export const SUPPORTED_LOCALES: Locale[] = ['en','it'];

export const DEFAULT_LOCALE: Locale = 'en';

export const messagesMap: Record<Locale, Record<string, string>> = {
  en: en as Record<string,string>,
  it: it as Record<string,string>,
};
