import {DateTime} from 'luxon';

export const formatTimeAgo = (isoString: string) => {
  return DateTime.fromISO(isoString).toRelative();
};

export const timeFromDateString = (isoString: string) => {
  return DateTime.fromISO(isoString).toFormat('hh:mm a');
};

export const formatedDateString = (isoString: string) => {
  return DateTime.fromISO(isoString).toFormat('dd MMM yyyy');
};