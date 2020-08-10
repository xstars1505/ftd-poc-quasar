import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { format } from 'date-fns';
import { DATE_TIME_FORMAT, SERVER_TIME_ZONE } from '@/app.constants';
import i18n from '@/i18n';

function convertDateTimeToUtcMils(date) {
  return zonedTimeToUtc(date, SERVER_TIME_ZONE).valueOf();
}

function convertDateTimeToJapanTimezone(mils, formatType) {
  formatType = formatType || DATE_TIME_FORMAT;
  const locale = getLocaleClass();
  return format(utcToZonedTime(mils, SERVER_TIME_ZONE), formatType, { locale });
}

function getLocaleClass() {
  let locale;
  switch (i18n.locale) {
    case 'en':
      locale = 'en-US';
      break;
    case 'zh':
      locale = 'zh-CN';
      break;
    default:
      locale = 'ja';
      break;
  }
  return require(`date-fns/locale/${locale}/index`);
}

export default {
  convertDateTimeToUtcMils,
  convertDateTimeToJapanTimezone
};
