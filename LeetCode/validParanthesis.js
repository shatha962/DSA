var isValid = function(s) {
    var stack =[];
    for(var i = 0; i < s.length; i++){
        char = stack[stack.length-1]
        if(s[i]  == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        }
            else if(s[i] == ')' &&  char == '('
            || s[i] == ']' && char == '['
            || s[i] == '}' && char == '{'){
                    stack.pop()
            }
            else return false
        }
    return stack.length ? false : true;
};
console.log(isValid("(([{}])){"));