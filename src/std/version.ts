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
export const fromString = (
  str: string
): [number, number, number] | undefined => {
  const { length } = str;
  if (length !== 3 && length !== 6) {
    return undefined;
  }

  const step = length === 3 ? 1 : 2;
  const pattern = length === 3 ? /^[0-9a-z]$/ : /^\d{2}$/;

  const fields: [number, number, number] = [-1, -1, -1];
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
