import { Token } from "./token";
import { TokenType } from "./tokenType";

export class Lexer {
  private start: number;
  private current: number;
  private line: number;
  private column: number;
  private tokens: Token[] = [];

  constructor(private content: string) {
    this.start = 0;
    this.current = 0;
    this.line = 1;
  }

  scanTokens(): Token[] {
    while (!this.isAtEnd()) {
      this.start = this.current;
      this.scanToken();
    }
    this.addToken(TokenType.EOF);
    return this.tokens;
  }

  private scanToken() {
    const c = this.advance();
    if (c === ":") {
      if (!this.match(":")) {
        return this.addToken(TokenType.Colon);
      }
      if (this.match("=")) {
        return this.addToken(TokenType.Assignment);
      }
    }
    if (c === ",") {
      return this.addToken(TokenType.Comma);
    }
    if (c === "{") {
      return this.addToken(TokenType.CurlyBraceLeft);
    }
    if (c === "}") {
      return this.addToken(TokenType.CurlyBraceRight);
    }
    if (c === "-") {
      if (!this.match("-")) {
        return this.addToken(TokenType.HyphenMinus);
      }
      // TODO: Comment
    }
    if (c === "(") {
      return this.addToken(TokenType.ParenthesisLeft);
    }
    if (c === ")") {
      return this.addToken(TokenType.ParenthesisRight);
    }
    if (c === ".") {
      if (!this.match(".")) {
        return this.addToken(TokenType.Period);
      }
      if (!this.match(".")) {
        return this.addToken(TokenType.RangeSeparator);
      }
      return this.addToken(TokenType.Ellipsis);
    }
    if (c === "[") {
      if (!this.match("[")) {
        return this.addToken(TokenType.BracketLeft);
      }
      return this.addToken(TokenType.VersionBracketLeft);
    }
    if (c === "]") {
      if (!this.match("]")) {
        return this.addToken(TokenType.BracketRight);
      }
      return this.addToken(TokenType.VersionBracketRight);
    }
    // TODO: TypeReference, Identifier and other reserved words
    // TODO: Raise and report error
    throw new Error("Unexpected character: " + c);
  }

  private advance(): string {
    return this.content[this.current++];
  }

  private match(expected: string): boolean {
    if (this.isAtEnd()) {
      return false;
    }
    if (this.content[this.current] !== expected) {
      return false;
    }
    this.current++;
    return true;
  }

  private addToken(type: TokenType) {
    const lexeme = this.content.substring(this.start, this.current);
    this.tokens.push(new Token(type, lexeme, this.line, this.column));
  }

  private isAtEnd(): boolean {
    return this.current >= this.content.length;
  }
}
