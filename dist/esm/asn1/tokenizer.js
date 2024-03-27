import { Token } from "./token.js";
import { TokenType } from "./tokenType.js";
import { RESERVED_WORDS } from "./reservedWords.js";
export function tokenize(content) {
    let start = 0;
    let current = 0;
    let line = 1;
    let column = 1;
    const tokens = [];
    while (!isAtEnd()) {
        start = current;
        scanToken();
    }
    addToken(TokenType.EOF);
    return tokens;
    function scanToken() {
        const c = advance();
        if (c === ":") {
            if (!match(":")) {
                return addToken(TokenType.Colon);
            }
            if (match("=")) {
                return addToken(TokenType.Assignment);
            }
        }
        if (c === ";") {
            return addToken(TokenType.Semicolon);
        }
        if (c === "@") {
            return addToken(TokenType.AtSign);
        }
        if (c === "|") {
            return addToken(TokenType.VerticalBar);
        }
        if (c === ",") {
            return addToken(TokenType.Comma);
        }
        if (c === "{") {
            return addToken(TokenType.CurlyBraceLeft);
        }
        if (c === "}") {
            return addToken(TokenType.CurlyBraceRight);
        }
        if (c === "-") {
            if (!match("-")) {
                return addToken(TokenType.HyphenMinus);
            }
            return comment();
        }
        if (c === "(") {
            return addToken(TokenType.ParenthesisLeft);
        }
        if (c === ")") {
            return addToken(TokenType.ParenthesisRight);
        }
        if (c === ".") {
            if (!match(".")) {
                return addToken(TokenType.Period);
            }
            if (!match(".")) {
                return addToken(TokenType.RangeSeparator);
            }
            return addToken(TokenType.Ellipsis);
        }
        if (c === "[") {
            if (!match("[")) {
                return addToken(TokenType.BracketLeft);
            }
            return addToken(TokenType.VersionBracketLeft);
        }
        if (c === "]") {
            if (!match("]")) {
                return addToken(TokenType.BracketRight);
            }
            return addToken(TokenType.VersionBracketRight);
        }
        if (isLower(c)) {
            return identifier();
        }
        if (isUpper(c)) {
            return typeReference();
        }
        if (isDigit(c)) {
            return number();
        }
        if (c === " " || c === "\t" || c === "\r") {
            return;
        }
        if (c === "\n") {
            line++;
            column = 1;
            return;
        }
        error(`Unexpected character: ${c}] Unexpected character: ${c}`);
    }
    function advance() {
        return content[current++];
    }
    function match(expected) {
        if (isAtEnd()) {
            return false;
        }
        if (content[current] !== expected) {
            return false;
        }
        current++;
        return true;
    }
    function peek() {
        if (isAtEnd()) {
            return null;
        }
        return content[current];
    }
    function peekNext() {
        if (current + 1 >= content.length) {
            return null;
        }
        return content[current + 1];
    }
    function comment() {
        while (true) {
            if (isAtEnd()) {
                break;
            }
            if (peek() === "\n") {
                break;
            }
            if (peek() === "-" && peekNext() === "-") {
                advance();
                advance();
                break;
            }
            advance();
        }
        addToken(TokenType.Comment);
    }
    function identifier() {
        while (true) {
            const c = peek();
            if (c === null) {
                break;
            }
            if (!isUpper(c) && !isLower(c) && !isDigit(c) && c !== "-") {
                break;
            }
            advance();
        }
        addToken(TokenType.Identifier);
    }
    function number() {
        while (true) {
            const c = peek();
            if (c === null) {
                break;
            }
            if (!isDigit(c)) {
                break;
            }
            advance();
        }
        if (content[start] === "0" && current - start > 1) {
            return error(`Number cannot start with 0`);
        }
        addToken(TokenType.Number);
    }
    function typeReference() {
        var _a;
        while (true) {
            const c = peek();
            if (c === null) {
                break;
            }
            if (!isUpper(c) && !isLower(c) && !isDigit(c) && c !== "-") {
                break;
            }
            advance();
        }
        const lexeme = content.substring(start, current);
        const tokenType = (_a = RESERVED_WORDS[lexeme]) !== null && _a !== void 0 ? _a : TokenType.TypeReference;
        addToken(tokenType);
    }
    function addToken(type) {
        const lexeme = content.substring(start, current);
        tokens.push(new Token(type, lexeme, line, column));
        column += current - start;
    }
    function isDigit(c) {
        return c >= "0" && c <= "9";
    }
    function isLower(c) {
        return c >= "a" && c <= "z";
    }
    function isUpper(c) {
        return c >= "A" && c <= "Z";
    }
    function isAtEnd() {
        return current >= content.length;
    }
    function error(message) {
        // TODO: Raise and report error
        console.error(`[${line.toString().padStart(6)}:${column
            .toString()
            .padStart(4)}] ${message}`);
    }
}
