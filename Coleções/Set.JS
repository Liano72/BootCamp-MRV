function unicosElemnetos(array) {

    let unicos = new Set(array);
    return [...unicos];

}

const array = [2, 5, 70, 55, 55, 10, 12];

console.log(unicosElemnetos(array));