/* Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship */

function points(games) {
    let ourPoints = 0;
    for (let i = 0; i < 10; i++) {
        if (games[i]?.[0] > games[i]?.[2]) {
            ourPoints += 3
        } 
        else if (games[i]?.[0] == games[i]?.[2]) {
            ourPoints += 1
        }
    }
    return ourPoints
}

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); 
// output 10 