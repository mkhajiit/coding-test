// n이하의 수가 주어질때 n이 홀수면 n이하 홀수의 합을 return n이 짝수면 n이하의 짝수의 합을 return
// 나의 풀이
function solution(n) {
  var answer = 0;
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i += 2) {
      answer += i;
    }
  } else {
    for (let i = 2; i <= n; i += 2) {
      answer += i * i;
    }
  }
  return answer;
}

// 프로그레머스 최고 좋아요 풀이
// 시간 복잡도 O(1)로 좋은 풀이
function solution(n) {
  // n 이하의 홀수 합 = 홀수 개수의 제곱을 이용해 구해짐 ((n + 1) / 2)²
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  //  n 이하의 짝수 제곱합 n(n + 1)(n + 2) / 6
  else return (n * (n + 1) * (n + 2)) / 6;
}

//짝수의합 n(n + 2) / 4 등차수열을 이용함
