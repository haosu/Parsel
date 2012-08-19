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
        // error
      }

      i += params.diff;
      tokens.push(params.tokens);
    }

    return tokens; 
  },

  isKeyword : function(c) {

  },

  isWhiteSpace : function (c) { 
    return /\s/.test(c); 
  },

  isString : function(c) {
    // call keyword after finding quote
  },

  isLiteral : function(c) {

  }



  var isOperator = function (c) {  },
  isDigit = function (c) { return /[0-9]/.test(c); },
  
  isIdentifier = function (c) { return typeof c === "string" && !isOperator(c) && !isDigit(c) && !isWhiteSpace(c); };
}