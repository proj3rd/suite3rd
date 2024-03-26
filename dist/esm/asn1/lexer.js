import { Token } from "./token.js";
import { TokenType } from "./tokenType.js";
import { RESERVED_WORDS } from "./reservedWords.js";
export class Lexer {
    constructor(content) {
        this.content = content;
        this._tokens = [];
        this.start = 0;
        this.current = 0;
        this.line = 1;
        this.column = 1;
    }
    scanTokens() {
        while (!this.isAtEnd()) {
            this.start = this.current;
            this.scanToken();
        }
        this.addToken(TokenType.EOF);
        return this._tokens;
    }
    scanToken() {
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
        if (c === "0") {
            return this.addToken(TokenType.Number);
        }
        if (this.isDigit(c)) {
            return this.number();
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
    advance() {
        return this.content[this.current++];
    }
    match(expected) {
        if (this.isAtEnd()) {
            return false;
        }
        if (this.content[this.current] !== expected) {
            return false;
        }
        this.current++;
        return true;
    }
    peek() {
        if (this.isAtEnd()) {
            return null;
        }
        return this.content[this.current];
    }
    peekNext() {
        if (this.current + 1 >= this.content.length) {
            return null;
        }
        return this.content[this.current + 1];
    }
    comment() {
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
    identifier() {
        while (true) {
            const c = this.peek();
            if (c === null) {
                break;
            }
            if (!this.isUpper(c) &&
                !this.isLower(c) &&
                !this.isDigit(c) &&
                c !== "-") {
                break;
            }
            this.advance();
        }
        this.addToken(TokenType.Identifier);
    }
    number() {
        while (true) {
            const c = this.peek();
            if (c === null) {
                break;
            }
            if (!this.isDigit(c)) {
                break;
            }
            this.advance();
        }
        this.addToken(TokenType.Number);
    }
    typeReference() {
        var _a;
        while (true) {
            const c = this.peek();
            if (c === null) {
                break;
            }
            if (!this.isUpper(c) &&
                !this.isLower(c) &&
                !this.isDigit(c) &&
                c !== "-") {
                break;
            }
            this.advance();
        }
        const lexeme = this.content.substring(this.start, this.current);
        const tokenType = (_a = RESERVED_WORDS[lexeme]) !== null && _a !== void 0 ? _a : TokenType.TypeReference;
        this.addToken(tokenType);
    }
    addToken(type) {
        const lexeme = this.content.substring(this.start, this.current);
        this._tokens.push(new Token(type, lexeme, this.line, this.column));
        this.column += this.current - this.start;
    }
    isDigit(c) {
        return c >= "0" && c <= "9";
    }
    isLower(c) {
        return c >= "a" && c <= "z";
    }
    isUpper(c) {
        return c >= "A" && c <= "Z";
    }
    isAtEnd() {
        return this.current >= this.content.length;
    }
}
