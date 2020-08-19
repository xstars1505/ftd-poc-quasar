import Vue from 'vue';
import DateTimeUtil from '@/utils/date-time';
import { DATE_TIME_FORMAT } from '@/constants/app.constants';

Vue.filter('dateTime', function(value, format) {
  if (!value) {
    return '';
  }
  return DateTimeUtil.convertDateTimeToJapanTimezone(
    value,
    format || DATE_TIME_FORMAT
  );
});
