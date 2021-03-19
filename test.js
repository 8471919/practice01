// // // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // // 함수형
// // // // map
// // // // reduce
// // // // filter
// // // // fill

// // // new Array(10).fill(0);

// // // new Array(10)
// // //     .fill(0)
// // //     .map((el, i) => i + 1)
// // //     .filter((el, i) => el % 2)
// // //     .reduce((acc, cur) => (acc += cur));

// // var a = 3;

// // console.log(a);

// // a = 5;

// const arr2 = new Array(10).fill(0).map((el, i) => i + 1);

// for (let i = 0; i < 10; i++) {
//     console.log(arr2[i]);
// }

// // value
// for (const a of arr2) {
//     console.log(a);
// }

// // index
// for (const a in arr2) {
//     console.log(a);
// }

// console.log("@@@@@@@@@@@@@@@@@@");
// arr2.forEach((el, i) => console.log(el));

// function add(a, b) {
//     return a + b;
// }

// const add2 = (a, b) => a + b;

// const add3 = (a, b) => {
//     return a + b;
// };

// const sum = add(add2(add3(0, 1), 2), 3);
// console.log(sum);
