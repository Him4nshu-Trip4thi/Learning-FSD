const sum=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
const div=(a,b)=>a/b;

const PI=3.14;
const g=9.8;

let obj = {
    sum: sum,
    mul: mul,
    diff: sub,
    div: div,
    g: g,
    PI: PI
};

module.exports = obj;
