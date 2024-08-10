function isValid(s) {
    const stack = [];//Stack: We use an array stack to keep track of the opening brackets.
    //The brackets object defines the pairs of closing and opening brackets.
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i=0;i<s.length;i++) {
        if (s[i]==='('||s[i]==='{'||s[i]==='[') {
            stack.push(s[i]);
        } else if(stack[stack.length-1]===brackets[s[i]]){
           stack.pop();
        }else return false;
    }

    // The stack should be empty if all brackets are matched
    return stack.length ?false:true;
}

// Example usage
console.log(isValid("){"));          //false
console.log(isValid("()"));         // true
console.log(isValid("()[]{}"));     // true
console.log(isValid("(]"));         // false
console.log(isValid("([)]"));       // false
console.log(isValid("{[]}"));       // true