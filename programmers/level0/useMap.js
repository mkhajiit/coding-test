// Map 사용해보기

const keys = ['name', 'age', 'hobby'];
const values = ['John', '25', 'Game'];

const map = new Map(
  keys.map((key, index) => {
    return [key, values[index]];
  })
);

console.log(map);
// get메서드로 키를 이용해 값을 읽어온다.
console.log(map.get('name'));
