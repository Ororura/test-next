import { IConvertDate } from './types';

const convertDate: IConvertDate = (date) => {
  const dateObject: Date = new Date(date);

  const hours = String(dateObject.getUTCHours()).padStart(2, '0');
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');

  const day = dateObject.getUTCDate();
  const month = dateObject.toLocaleString('ru-RU', { month: 'long' });
  const year = dateObject.getUTCFullYear();

  return `${hours}:${minutes} ${day} ${month} ${year}`;
};

export { convertDate };
