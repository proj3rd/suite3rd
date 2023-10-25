type Version = {
  major: number;
  minor: number;
  editorial: number;
};

const CHAR_TO_VERSION_MAP = Object.fromEntries(
  "123456789abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((char, index) => [char, index + 1])
);

export function fromChar(char: string): number | undefined {
  const coerced = Number(char);
  if (Number.isInteger(coerced)) {
    return coerced;
  }
  return CHAR_TO_VERSION_MAP[char.toLocaleLowerCase()];
}

export function fromString(str: string): Version | undefined {
  if (str.length === 3 || str.length === 6) {
    const step = str.length / 3;
    const major = fromChar(str.substring(0 * step, 0 * step + 1));
    const minor = fromChar(str.substring(1 * step, 1 * step + 1));
    const editorial = fromChar(str.substring(2 * step, 2 * step + 1));
    if (major === undefined || minor === undefined || editorial === undefined) {
      return undefined;
    }
    return { major, minor, editorial };
  }
  return undefined;
}
