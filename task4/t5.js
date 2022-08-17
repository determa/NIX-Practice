function change(names) {
    return names.replace(/(\w+)\,\s(\w+)/g, '$2 $1');
}

// let names = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
// console.log(change(names));
