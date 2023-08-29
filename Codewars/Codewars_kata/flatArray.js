const array = [1, 2, [3, 4, 5, [6, 7]], 8, 9]

const flatArray = (arr) => {
    let result = []
    arr.forEach( el => {
        if(Array.isArray(el)) {
            return result = [...result, ...flatArray(el)]
        } else {
            return result = result.concat(el)
        }
    })
    return  result
}

console.log(flatArray(array)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]