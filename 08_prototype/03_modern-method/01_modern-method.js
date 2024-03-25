//Object.create(proto0) : [[prototype]] 이 proto를 참조하는 빈 객체를 만들어준다.

const user = {
    activate :true
};

//프로토타입이 user 인 새로운 객체 생성
const student = Object.create(user);
console.log(student.activate);

//Object.getProrotypeOf(obj) - obj의 [[prototype]] 반환
console.log(Object.getPrototypeOf(student)=== user);

//Object.setPrototypeOf(obj, proto) - obj의 [[protootype]] 이 proto가 되도록 설정
Object.setPrototypeOf(student, {}); //student 의 프로토타입을 {}으로 변경

console.log(Object.getPrototypeOf(student)=== user);