type PreprocessorOptions = {
  keep3gppTagComments: boolean;
};

const PatternAndReplacementList: Array<[RegExp | string, string]> = [
  [/^\s*?--.*$/gm, ""],
];

export function preprocess(content: string, options?: PreprocessorOptions) {
  const patternAndReplacementList = [...PatternAndReplacementList];
  if (options?.keep3gppTagComments) {
    throw Error("unimplemented");
  } else {
    patternAndReplacementList.push([/--.*--/g, ""], [/--.*$/gm, ""]);
  }
  return patternAndReplacementList.reduce(
    (prev: string, item) => prev.replace(...item),
    content
  );
}
