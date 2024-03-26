import { Token } from "./token";
import { TokenType } from "./tokenType";
import { RESERVED_WORDS } from "./reservedWords";

export class Lexer {
  private start: number;
  private current: number;
  private line: number;
  private column: number;
  private _tokens: Token[] = [];

  constructor(private content: string) {
    this.start = 0;
    this.current = 0;
    this.line = 1;
    this.column = 1;
  }

  scanTokens(): Token[] {
    while (!this.isAtEnd()) {
      this.start = this.current;
      this.scanToken();
    }
    this.addToken(TokenType.EOF);
    return this._tokens;
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
      return this.comment();
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
    if (this.isLower(c)) {
      return this.identifier();
    }
    if (this.isUpper(c)) {
      return this.typeReference();
    }
    if (c === " " || c === "\t" || c === "\r") {
      return;
    }
    if (c === "\n") {
      this.line++;
      this.column = 1;
      return;
    }
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

  private peek(): string | null {
    if (this.isAtEnd()) {
      return null;
    }
    return this.content[this.current];
  }

  private peekNext(): string | null {
    if (this.current + 1 >= this.content.length) {
      return null;
    }
    return this.content[this.current + 1];
  }

  private comment() {
    while (true) {
      if (this.isAtEnd()) {
        break;
      }
      if (this.peek() === "\n") {
        break;
      }
      if (this.peek() === "-" && this.peekNext() === "-") {
        this.advance();
        this.advance();
        break;
      }
      this.advance();
    }
    this.addToken(TokenType.Comment);
  }

  private identifier() {
    while (true) {
      const c = this.peek();
      if (c === null) {
        break;
      }
      if (
        !this.isUpper(c) &&
        !this.isLower(c) &&
        !this.isDigit(c) &&
        c !== "-"
      ) {
        break;
      }
      this.advance();
    }
    this.addToken(TokenType.Identifier);
  }

  private typeReference() {
    while (true) {
      const c = this.peek();
      if (c === null) {
        break;
      }
      if (
        !this.isUpper(c) &&
        !this.isLower(c) &&
        !this.isDigit(c) &&
        c !== "-"
      ) {
        break;
      }
      this.advance();
    }
    const lexeme = this.content.substring(this.start, this.current);
    const tokenType = RESERVED_WORDS[lexeme] ?? TokenType.TypeReference;
    this.addToken(tokenType);
  }

  private addToken(type: TokenType) {
    const lexeme = this.content.substring(this.start, this.current);
    this._tokens.push(new Token(type, lexeme, this.line, this.column));
    this.column += this.current - this.start;
  }

  private isDigit(c: string): boolean {
    return c >= "0" && c <= "9";
  }

  private isLower(c: string): boolean {
    return c >= "a" && c <= "z";
  }

  private isUpper(c: string): boolean {
    return c >= "A" && c <= "Z";
  }

  private isAtEnd(): boolean {
    return this.current >= this.content.length;
  }
}
