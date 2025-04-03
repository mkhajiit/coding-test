// 프로그레머스 level 0
// 문자열 섞기
// 알아둘점: 문자열도 배열처럼 인덱스로 접근이 가능하다
const str1 = 'aaaaa';
const str2 = 'bbbbb';

function solution(str1, str2) {
  let answer = '';
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  answer = result;
  console.log(answer);
  return answer;
}

solution(str1, str2);
