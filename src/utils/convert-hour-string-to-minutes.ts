/**
 * Converter string de hora para minutos
 * Ex: 18:00 → ["18", "00"] → [18, 00]
 * @param hourString string para conversão
 */
export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}
