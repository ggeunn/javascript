/* 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다. */

var student = {
    // key = name , value = '이지은'
    name: '이지은',
    // 프로퍼티의 나열은 쉼표로 구분 , 마지막 프로퍼티 뒤에 쉼표 사용 가능
    age: 20
}

/** 프로퍼티 키
 *   빈 문자열을 포함하는 모든 문자열 또는 심벌 값 => 즉 키는 프로퍼티 값에 접근하기 위한 식별자
 *   문자열이므로 따옴표를 사용하지만 식별자 네이밍 규칙을 따르는 경우 사용하지 않아도 된다.
 *   단, 식별자 네이밍 규칙을 따른지 않는 이름은 따옴표를 반드시 사용해야하며
 *   가능한 식별자 네이밍 규칙을 따르는것을 권장한다.
 */

var obj = {
    normal: 'normal value', // 규칙준수
    '@ s p a c e @': 'space value', // 특수 기호나 공백 등은 반드시 '' 문자열로 감싸야 한다.
    '': '', // 권장하지 않음
    0: 1, // 숫자 키는 내부적으로 문자열로 변환
    var: 'var', // 권장하지 않음
    normal: 'new value', // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.

};

console.table(obj);

// 프로퍼티 키 동적 생성
var key = 'test';
obj[key] = 'test value';

console.table(obj);

// 프로퍼티 추가 순서는 정수 프로퍼티는 자동 정렬되고,
// 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬이 된다.