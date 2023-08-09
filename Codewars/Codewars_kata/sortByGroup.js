const studentList = [
    {name: 'Ivan', age: 18, groupId: 1},
    {name: 'Ignat', age: 18, groupId: 1},
    {name: 'Jon', age: 17, groupId: 2},
    {name: 'Marina', age: 23, groupId: 2},
    {name: 'Bob', age: 22, groupId: 1},
]

const _getStudentsList = (array) => {
    const result = {}
    array.forEach( (student) => result[student.groupId] =
        array.filter(( el ) => student.groupId === el.groupId && el.age > 17))
    return result
}

const getStudentsList = (array) => {
    return array.reduce((acc, student)=>{
        if (student.age > 17) {
            if (!acc[student.groupId]) {
                acc[student.groupId] = [];
            }
            acc[student.groupId].push(student);
        }
        return acc;
    }, {});
}

console.log(getStudentsList(studentList))