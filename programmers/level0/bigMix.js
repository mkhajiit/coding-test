// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
const a = 9;
const b = 91;

function solution(a, b) {
  var answer = 0;
  ab = Number(a.toString() + b.toString());
  ba = Number(String(b) + String(a));
  answer = ab > ba ? ab : ba;
  return answer;
}

console.log(solution(a, b));

// 프로그레머스 좋아요가 가장 많은 방법
// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }
