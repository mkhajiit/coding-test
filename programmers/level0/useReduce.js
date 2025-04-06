// reduce() 메서드 연습문제
// arr.reduce((accumulator, currentValue, index, array) => {
//로직
// }, initialValue);
// acc(누적값), cur(현재 순회중인 배열의 요소), index(현재 인덱스 (옵션)), array(원본배열(옵션)), initialValue(누적값의 초기값)
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur);

console.log(sum);
