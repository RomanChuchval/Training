/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on. */

function howMuchILoveYou(p) {
    let flower = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];
    let l = flower.length;
    return flower[(p - (1 % l) + l) % l];
}
