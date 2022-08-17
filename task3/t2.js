function testString(str) {
    let brackets = [];
    for (let value of str) {
        if (value === '(' || value === '[')
            brackets.push(value);
        if (value === ')')
            if (brackets.pop() !== '(')
                return false;
        if (value === ']')
            if (brackets.pop() !== '[')
                return false;
    }
    return true;
}

// console.log(testString("isu([syvstc]ts(crs))cps"));