function findWord(str, word) {
    let arr = str.split(' ');
    for (value of arr)
        if (value.indexOf(word) != -1)
            return value;
    return -1;
}

// console.log(findWord("Ми знаємо, що монохромний колір – це градації сірого", "хром"));