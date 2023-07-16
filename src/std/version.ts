type Version = [number, number, number];

const CHAR_TO_NUM_MAP = Object.fromEntries(
  "0123456789abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((char, index) => [char, index])
);

/**
 *
 * @param str in form of `abc` or `abcdef`.
 * See [File Name Conventions](https://www.3gpp.org/specifications-technologies/specifications-by-series/file-name-conventions)
 * @returns major, minor and editorial versions in non-negative integer.
 * See [Version Numbering Scheme](https://www.3gpp.org/specifications-technologies/specifications-by-series/version-numbering-scheme)
 */
export const fromString = (str: string): Version | undefined => {
  const { length } = str;
  if (length !== 3 && length !== 6) {
    return undefined;
  }

  const step = length === 3 ? 1 : 2;
  const pattern = length === 3 ? /^[0-9a-z]$/ : /^\d{2}$/;

  const fields: Version = [-1, -1, -1];
  for (let i = 0; i < 3; i++) {
    const substr = str.substring(i * step, (i + 1) * step);
    if (!pattern.test(substr)) {
      return undefined;
    }
    const coerced = +substr;
    fields[i] = isNaN(coerced) ? CHAR_TO_NUM_MAP[substr]! : coerced;
  }
  return fields;
};

/**
 * Get date which `quarters` quarters passed from `date`
 * @param quarters The number of quarters passed from `date`.
 * If `quarter` is equal to 0, it returns quarter which `date` belongs to.
 * Default is 0
 * @returns
 */
export function getQuarter(date: Date, quarters: number = 0) {
  const fullyear = date.getFullYear();
  const month = date.getMonth();
  const monthToSubtract = (month + 1 - 3) % 3;
  return new Date(fullyear, month + monthToSubtract + 3 * quarters);
}

export function compare(a: Version, b: Version): number {
  const major = a[0] - b[0];
  if (major) {
    return major;
  }
  const minor = a[1] - b[1];
  if (minor) {
    return minor;
  }
  const editorial = a[2] - b[2];
  return editorial;
}
