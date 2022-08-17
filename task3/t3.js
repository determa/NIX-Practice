function circleArray() {
    arr = new Array();
    this.add = (data) => {
        arr.push(data);
    };
    this.get = (index) => {
        let n = arr.length;
        return arr[(index % n + n) % n];
    };
}

// let circledArray = new circleArray();
// circledArray.add("Київ");
// circledArray.add("Харків");
// circledArray.add("Херсон");
// console.log(circledArray.get(4));