const NonTagPatterns: Array<string | RegExp> = [
  /--\s*?\(.*$/gim,
  /--\s*?\d.*$/gim,
  /--\s*?[ab].*$/gim,
  /--\s*?cont.*$/gim,
  /--\s*?[d-m].*$/gim,
  /--\s*?[o-z].*$/gim,
];

type PreprocessorOptions = {
  capture3GppTagComment: boolean;
};

export function preprocess(
  content: string,
  { capture3GppTagComment }: PreprocessorOptions
) {
  // TODO: Remove inline comment
  const patternsToRemove: Array<string | RegExp> = [/^\s*?--.*$/gm];
  if (capture3GppTagComment) {
    patternsToRemove.push(...NonTagPatterns);
  }
  return patternsToRemove.reduce(
    (prev: string, pattern) => prev.replace(pattern, ""),
    content
  );
}
