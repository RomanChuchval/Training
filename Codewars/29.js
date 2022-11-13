// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let hoursInMillisec = h * 3600000;
    let minInMillisec = m * 60000;
    let secInMillisec = s * 1000;
    return hoursInMillisec + minInMillisec + secInMillisec
}