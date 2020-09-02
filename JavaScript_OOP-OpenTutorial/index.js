class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  // * JavaScript Class는 객체를 생성할 때 constructor 함수를 자동으로 호출

  sum() {
    return this.first + this.second;
  }
}

class Person2 extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return this.sum() / 3;
  }
}
var kim = new Person2('kim', 10, 20, 30);
var lee = new Person2('lee', 20, 50);
console.log(kim.sum());
console.log(kim.avg());
