/* Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */

function reverseWords(str){
    let strArr = str.split(' ')
    let reversedStr = []
        for (i = strArr.length - 1; i >= 0 ; i-- ) {
            reversedStr.push(strArr[i])
        }
    return reversedStr.join(' ')
}
