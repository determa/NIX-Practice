function isPowOfTwo(num) {
    return (num > 1) && (num & (num - 1)) == 0;
}

// console.log(isPowOfTwo(1));