import { TokenType } from "./tokenType.js";

export class Token {
  constructor(
    public readonly type: TokenType,
    public readonly lexeme: string,
    public readonly line: number,
    public readonly column: number
  ) {}
}
