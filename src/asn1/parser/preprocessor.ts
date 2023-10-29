export function preprocess(content: string) {
  return content.replace(/^\s*?--.*$/gm, "");
}
