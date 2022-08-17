function substrCount(input, needle, offset, length) {
    let slice = input.slice(offset, length);
    return slice.split(needle).length - 1;
}

// console.log(substrCount('Good Golly Miss Molly dolly polly33', 'll', 0, 10));