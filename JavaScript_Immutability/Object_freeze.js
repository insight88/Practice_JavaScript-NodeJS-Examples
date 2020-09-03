var o1 = { name: 'kim', score: [1, 2] };
o1.name = 'lee';
o1.city = 'seoul';
console.log(o1);

Object.freeze(o1);
o1.name = 'park';
o1.city = 'busan';
o1.score.push(3);
console.log(o1);
// ! o1 객체의 프로퍼티 중 score 객체를 가리키는 값은 ref값이기 때문에 push가 가능
// ! score 객체는 o1 객체와 별도의 메모리에 할당되어 있다
