/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F' */

getGrade = (s1, s2, s3) => {
    let avgScore = (s1 + s2 + s3) / 3;
    if (avgScore >= 90 && avgScore <= 100) {
        return "A";
    } else if (avgScore >= 80 && avgScore < 90) {
        return "B";
    } else if (avgScore >= 70 && avgScore < 80) {
        return "C";
    } else if (avgScore >= 60 && avgScore < 70) {
        return "D";
    } else {
        return "F";
    }
};
