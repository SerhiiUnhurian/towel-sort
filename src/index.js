// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    const size = matrix.length;
    let sortedArray = [];

    for (let i = 1; i <= size; i++) {
        let arr = matrix[i - 1];

        if (i % 2 === 0) {
            arr = arr.reverse();
        }
        for (let val of arr) {
            sortedArray.push(val);
        }
    }
    return sortedArray;
};
