function fn(person) {
  // person = Object.assign({}, person);
  person.name = 'lee';
  return person;
}
var o1 = { name: 'kim' };
var o2 = fn(o1);
// ! Object.assign이 없다면 fn(o1)이 실행되면서 o1의 데이터가 바뀜
console.log(o1, o2);

function fn2(person) {
  person.name = 'lee';
}
var m1 = { name: 'kim' };
var m2 = Object.assign({}, m1);
fn2(m2);
console.log(m1, m2);

var score = [1, 2, 3];
var a = score;
var b = score;
score.push(4);
console.log(score, a, b);

var score3 = [1, 2, 3];
var c = score3;
var d = score3;
var score4 = score3.concat(4);
// ! score3 객체를 통째로 복사한 후 4를 추가하기 때문에 성능이 나쁘지만 원본 데이터가 immutable
console.log(score3, score4, c, d);
