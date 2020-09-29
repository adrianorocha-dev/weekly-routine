export default function minutesToHours(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);

  const minutes = totalMinutes - hours * 60;

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}
