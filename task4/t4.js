function check_date(date) {
    let regex = RegExp(/(^0?[1-9]|[12][0-9]|3[01])(-)(0?[1-9]|1[012])(-)([0-9]{4})$/);
    return regex.test(date);
}

let dates = ["20-09-2016", "99-9-2021", "9-13-2021", "21-09-2016", "21-09-2022", "25-07-2021", "25-7-2021", "1-1-2021", "2-12-1979"];

dates.forEach((date) => {
    console.log(check_date(date), date);
});
