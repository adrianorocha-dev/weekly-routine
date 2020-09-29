function validateHourFormat(time: string) {
  const matches = time.match(/^[0-9]*[0-9]:[0-9][0-9]$/);

  if (!matches || matches.length === 0) {
    throw new Error('Invalid hour format');
  }
}

export default function timeToMinutes(time: string) {
  validateHourFormat(time);

  const [h, m] = time.split(':');

  const hours = Number(h);
  const minutes = Number(m);

  return hours * 60 + minutes;
}
