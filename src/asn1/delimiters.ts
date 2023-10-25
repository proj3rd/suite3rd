type Delimiters = {
  Starter: RegExp;
  Terminator: RegExp;
};

const Asn1Delimiters: Delimiters = {
  // -- ASN1START
  Starter: /^--\s+?ASN1START.*?$/gm,
  // -- ASN1STOP
  Terminator: /^--\s+?ASN1STOP.*?$/gm,
};

const FallbackDelimiters: Delimiters = {
  // -- *****
  Starter: /^--\s+?\*+?.*?$/gm,
  // END (end of module definition)
  Terminator: /^\bEND\b.*?$/gm,
};

function newDelimiters({ Starter, Terminator }: Delimiters): Delimiters {
  return {
    Starter: new RegExp(Starter),
    Terminator: new RegExp(Terminator),
  };
}

function testDelimiters({ Starter, Terminator }: Delimiters, content: string) {
  const starterMatch = content.match(Starter);
  if (!starterMatch) {
    return false;
  }
  const index = (starterMatch.index! = starterMatch[0].length);
  return !!content.substring(index).match(Terminator);
}

export function selectDelimiters(content: string): Delimiters | undefined {
  if (testDelimiters(Asn1Delimiters, content)) {
    return newDelimiters(Asn1Delimiters);
  }
  if (testDelimiters(FallbackDelimiters, content)) {
    return newDelimiters(FallbackDelimiters);
  }
  return undefined;
}
