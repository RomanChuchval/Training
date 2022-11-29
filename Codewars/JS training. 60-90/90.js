/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
2 and 3 are factors of 6 because: 2 * 3 = 6
For example 2 is not a factor of 7 because: 7 % 2 = 1 */

function checkForFactor(base, factor) {
    if (base % factor == 0) {
        return true;
    }
    return false;
}
