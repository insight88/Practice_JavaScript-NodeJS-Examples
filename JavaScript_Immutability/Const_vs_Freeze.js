const o1 = { name: 'kim' };
Object.freeze(o1);
const o2 = { name: 'lee' };
o1.name = 'park';
console.log(o1);

// * o1 = o2;
// * console.log(o1);
// ! 위를 실행하면 o1,o2가 const이기 때문에 TypeError가 발생
