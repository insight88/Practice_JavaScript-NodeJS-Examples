var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2);
// ! 두 변수가 하나의 메모리를 가리킨다.
// ! primitive type

var o1 = { name: 'kim' };
var o2 = { name: 'kim' };
console.log(o1, o2, o1 === o2);
// ! 두 객체가 각각의 메모리에 저장된 후 따로 참조된다.
// ! object type
var o3 = o1;
o3.name = 'lee';
console.log(o1, o2, o3, o1 === o2);
// ! o3.name 명령어가 o1의 데이터도 바꾼다.
// ! o3 = o1 때문에 o3, o1이 같은 메모리를 참조하기 때문이다.

var m1 = { name: 'kim' };
var m2 = Object.assign({}, m1);
console.log(m1, m2, m1 === m2);
m2.name = 'lee';
// ! Object.assign은 m1과 같은 데이터를 새로운 메모리에 할당
console.log(m1, m2, m1 === m2);
