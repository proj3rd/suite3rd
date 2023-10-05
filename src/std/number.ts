/**
 * @param specNumber in a form of `ab.xyz...`
 * @returns Series in a string type, e.g. `ab`
 */
export function getSeries(specNumber: string): string | undefined {
  const index = specNumber.indexOf(".");
  if (index === -1) {
    return undefined;
  }
  return specNumber.substring(0, index);
}

// https://www.3gpp.org/specifications-technologies/specifications-by-series/file-name-conventions
export function versionFromString(str: string) {
  function numberFromChar(char: string) {
    const coerced = Number(char);
    if (Number.isInteger(coerced)) {
      return coerced;
    }
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    return chars.indexOf(char);
  }

  const step = str.length / 3;
  if (step !== 1 && step !== 2) {
    return undefined;
  }

  return [0, 1, 2]
    .map((pos) => str.substring(pos * step, (pos + 1) * step))
    .map(numberFromChar);
}
