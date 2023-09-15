/**
 * Based on String.prototype.padStart()
 * @param value The value to be pad.
 * @param targetLength The length of the resulting string once the current str has been padded.
 * @param padString The string to pad the current str with.
 * @returns
 */

export const leftPad = (
  value: number | string,
  targetLength: number = 2,
  padString: string = "0"
): string => {
  return value.toString().padStart(targetLength, padString);
};
