
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix || matrix.length == 0) return [];
    let res = [];
    matrix.forEach((x, i) => {
        i % 2 ? x.reverse().forEach(e => res.push(e)) : x.forEach(e => res.push(e));
    });
    return res;
}
