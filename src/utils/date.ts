import dayjs from 'dayjs';

const URL_DATE_FORMAT = 'YYYY-MM-DD';

function date(rawDate: dayjs.ConfigType = Date.now(), format = 'DD.MM.YYYY') {
  return dayjs(rawDate).format(format);
}

export { date, URL_DATE_FORMAT };
