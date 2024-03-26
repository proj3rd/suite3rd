// These functions return a 'fresh' regular expression each time they are called
const DELIM_1 = () => ({
  start: /^\s*?-- ASN1START\s*?$/gm,
  stop: /^\s*?-- ASN1STOP\s*?$/gm,
  includeDelimiter: false,
});

const DELIM_2 = () => ({
  start: /^\s*?-- \*+\s*?$/gm,
  stop: /^\s*?END\s*?$/gm,
  includeDelimiter: true,
});

function detectDelimiter(content: string) {
  function testDelimiter(
    delim: ReturnType<typeof DELIM_1> | ReturnType<typeof DELIM_2>
  ) {
    const matchStart = delim.start.exec(content);
    if (!matchStart) {
      return false;
    }
    delim.stop.lastIndex = matchStart.index! + 1;
    const matchStop = delim.stop.exec(content);
    if (!matchStop) {
      return false;
    }
    return true;
  }
  const matchDelim1 = testDelimiter(DELIM_1());
  if (matchDelim1) {
    return DELIM_1();
  }
  const matchDelim2 = testDelimiter(DELIM_2());
  if (matchDelim2) {
    return DELIM_2();
  }
  return undefined;
}

/**
 * Extract ASN.1 definition from text
 */
export function extract(content: string) {
  const delimiters = detectDelimiter(content);
  if (!delimiters) {
    return null;
  }
  const { start, stop, includeDelimiter } = delimiters;
  const extracted: string[] = [];
  while (true) {
    const matchStart = start.exec(content);
    if (!matchStart) {
      break;
    }
    stop.lastIndex = matchStart.index! + 1;

    const matchStop = stop.exec(content);
    if (!matchStop) {
      break;
    }
    start.lastIndex = matchStop.index! + 1;

    const indexStart =
      matchStart.index! + (includeDelimiter ? 0 : matchStart[0].length);
    const indexStop =
      matchStop.index! + (includeDelimiter ? matchStop[0].length : 0);
    extracted.push(content.substring(indexStart, indexStop));
  }
  return extracted.join("\n");
}
