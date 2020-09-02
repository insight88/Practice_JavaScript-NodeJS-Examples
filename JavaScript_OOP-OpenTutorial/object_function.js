var kim = { name: 'kim', first: 10, second: 20 };
var lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
// sum();
console.log('sum.call(kim)', sum.call(kim, '=> ')); //apply
console.log('lee.call(kim)', sum.call(lee, ': '));
// * sum을 실행할 때 this의 값을 lee로 정함

var kimSum = sum.bind(kim, '-> ');
// * kim 객체가 sum 메소드도 갖는 kimSum이라는 새로운 함수(객체)를 생성
// * 첫 인자는 this 키워드를 설정, 나머지 인자는 바인드된 함수의 인수에 제공
console.log('kimSum()', kimSum());
