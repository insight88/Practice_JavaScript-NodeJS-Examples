var o1 = { name: 'kim', score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
// ! Object.assign을 쓰더라도, 객체 안의 객체 데이터는 같은 메모리를 가리킨다
// ! 겍체 데이터를 수정하면 원본도 수정된다

o2.score = o2.score.concat();
o2.score.push(4);
console.log(o1, o2, o1 === o2, o1.score === o2.score);
// ! concat()은 객체의 데이터는 똑같고 메모리는 다르게 할당
// ! o2.score.push 하더라도 원본 객체 데이터는 수정되지 않는다.
