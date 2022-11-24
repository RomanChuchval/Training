// counting sheeps

var countSheep = function (num) {
    let output = "";
    if (num == 0) {
        return "";
    } else {
        for (let i = 1; i <= num; i++) {
            output += i + " sheep...";
        }
    }
    return output;
};
