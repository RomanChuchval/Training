/* Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

function correct(string) {
    let array = string.split("");
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "0") {
            array[i] = "O";
        } else if (array[i] == "5") {
            array[i] = "S";
        } else if (array[i] == "1") {
            array[i] = "I";
        }
    }
    return array.join("");
}
