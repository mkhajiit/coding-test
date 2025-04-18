// Map 사용해보기

const keys = ['name', 'age', 'hobby'];
const values = ['John', 25, 'Game'];

const map = new Map(
  keys.map((key, index) => {
    return [key, values[index]];
  })
);

console.log(map);

// for of 로 map에 저장된 키:값을 출력
for (const [key, value] of map) {
  console.log(`${key}:${value}`);
}
// get메서드로 키를 이용해 값을 읽어온다.
console.log(map.get('name'));
// set메서드로 기존 키의 값을 덮어쓴다.
map.set('name', 'Alice');
console.log(map);
console.log(map.get('name'));

//has 메서드로 해당 키가 있는지를 확인한다. (true/false)
console.log(map.has('age'));
//delete 해당 키-값 제거
map.delete('name');
console.log(map);
//clear 모든 요소 제거
map.clear();
console.log(map);

//유사 매핑
// function solution(ineq, eq, n, m) {
//   const compare = {
//       "<=": n <= m,
//       "<!": n < m,
//       ">=": n >= m,
//       ">!": n > m,
//   };
//   return +compare[ineq + eq];
// }
