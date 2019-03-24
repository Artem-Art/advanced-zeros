module.exports = function getZerosCount(number, base) {
    let n = number;
    let b = base;
    let objPrim = {};
    let res = 0;
    let resArr = [];
    for (let i = 2; i <= b; i++) {
        if (b % i == 0) {
            objPrim[i] = 0;
            while (b % i == 0) {
                objPrim[i] += 1;
                b /= i;
            }
        }
    }
    for (let key in objPrim) {
        let count = key;
        while (count <= n) {
            res += Math.floor(n / count);
            count = count * key;
        }
        resArr.push(Math.floor(res / objPrim[key]));
        res = 0;
    }
    return Math.min(...resArr);
}

