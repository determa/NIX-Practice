function strPad(input, fullLen, fillStr, fillType = "FILL_RIGHT") {
    let res;
    switch (fillType) {
        case "FILL_RIGHT":
            res = input.padEnd(fullLen, fillStr);
            break;
        case "FILL_LEFT":
            res = input.padStart(fullLen, fillStr);
            break;
        case "FILL_BOTH":
            res = strPad(input, Math.ceil((fullLen - input.length) / 2) + input.length, fillStr, 'FILL_LEFT');
            res = strPad(res, fullLen, fillStr);
            break;
        default:
            res = strPad(input, fullLen, fillStr); // вызов default
            break;
    }
    return res;
}

// console.log(strPad('star', 10, '_*_')); // star_*__*_
// console.log(strPad('star', 8, '_*_', 'FILL_LEFT')); // _*__star
// console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**