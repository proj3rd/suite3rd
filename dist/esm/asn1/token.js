export class Token {
    constructor(type, lexeme, line, column) {
        this.type = type;
        this.lexeme = lexeme;
        this.line = line;
        this.column = column;
    }
}
