Parsel.Lexer = {
  lex : function(input) {
    var tokens = [];

    var i=0,
        chunk = "";

    while(chunk = source.slice(i)) {
      // returns {diff, tokens}
      var params = this.isKeyword(chunk) 
                || this.isWhiteSpace(chunk)
                || this.isString(chunk)
                || this.isLiteral(chunk);

      if(!params.diff) {
        // errors
      }

      i += params.diff;
      tokens.push(params.tokens);
    }

    return tokens; 
  },

  isKeyword : function(c) {
    var token = this.regKeyword.exec(c);

    if(token) {
      return token[0].length;
    }

    return 0;
  },

  isWhiteSpace : function (c) { 
    var token = this.regWhitespace.exec(c);

    if(token) {
      return token[0].length;
    }

    return 0;
  },

  isString : function(c) {
    // call keyword after finding quote
    if(!(c[0] == "\"" || c[1]=="'")) {
      return 0;
    } 

    var token = this.regWhitespace.exec(c.slice(1));

    if(token) {
      return token[0].length;
    }

    return 0;
  },

  isNumber : function(c) {
    var token = this.regNumber.exec(c);

    if(token) {
      return token[0].length;
    }

    return 0;
  },

  isLiteral : function(c) {
    var tag = chunk.slice(0, 1);
    switch(tag) {
    case '=':
    case ':':
    case '.':
    case ',':
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
    case '[':
    case ']':
    case '{':
    case '}':
    case '(':
    case ')':
        tokens.push([tag, tag]);
        return 1;
    }

    return 0;
  },


  regKeyword : /^[a-zA-Z][a-zA-Z0-9]*/,
  regNumber : /^-?[0-9]+(\.[0-9]+)?/,
  regComment : /^\/\/.*/,
  regWhitespace : /^[^\n\S]+/,
  regIndent : /^(?:\n[^\n\S]*)+/

}