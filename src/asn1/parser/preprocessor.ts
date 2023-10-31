const PatternAndReplacementList: Array<[RegExp | string, string]> = [
  [/^\s*?--.*$/gm, ""],
];

export function preprocess(content: string) {
  return PatternAndReplacementList.reduce(
    (prev: string, item) => prev.replace(...item),
    content
  );
}
