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
