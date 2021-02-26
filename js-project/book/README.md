# JavaScript

## 배열 내장함수
### forEach
각 원소를 사용하여 특정 작업을 하고자 할 때
```JavaScript
const arr = ['김', '이', '박'];
arr.forEach(elem => console.log(elem));
```
출력결과: 김 이 박

### map
각 원소를 대체하여 새로운 배열을 만들 때
```JavaScript
const arr = [1, 2, 3, 4, 5];
const squared = array.map(n => n * n);
console.log(squared);
```
출력결과: [1, 4, 9, 16, 25]
```JavaScript
const items = [
  {
    id: 1,
    text: 'hello'
  }
  {
    id: 2,
    text: 'hi'
  }
  {
    id: 3,
    text: 'bye'
  }
];
const texts = items.map(item => item.text);
console.log(texts);
```
출력결과: ["hello", "hi", "bye"]

### indexOf
특정 원소의 인덱스 값을 구할 때
```JavaScript
const arr = ['김', '이', '박'];
const index = arr.indexOf('이');
console.log(index);
```
출력결과: 1

### findIndex
특정 원소와 일치하는 가장 빠른 인덱스
```JavaScript
const items = [
  {
    id: 1,
    text: 'hello'
  }
  {
    id: 2,
    text: 'hi'
  }
  {
    id: 3,
    text: 'bye'
  }
];
const index = items.findIndex(item => item.text === 'bye');
console.log(index);
```
출력결과: 2

### find
특정 원소의 조건과 일치하는 가장 빠른 인덱스
```JavaScript
const items = [
  {
    id: 1,
    text: 'hello'
  }
  {
    id: 2,
    text: 'hi'
  }
  {
    id: 3,
    text: 'bye'
  }
];
const item = items.find(item => item.text === 'bye');
console.log(item);
```
출력결과: Object {id: 3, text: "bye"}

### filter
특정 조건과 일치하는 원소들을 뽑아 배열로 만들 때
```JavaScript
const items = [
  {
    id: 1,
    text: 'hello'
  }
  {
    id: 2,
    text: 'hi'
  }
  {
    id: 3,
    text: 'bye'
  }
];
const objs = items.filter(item => item.text === 'bye');
console.log(objs);
```
출력결과: [Object] 0: Object {id: 3, text: 'bye'}

### splice
특정 인덱스의 원소를 삭제, 두번째 인자는 첫번째 인자의 인덱스로부터의 개수
```JavaScript
const arr = [1, 2, 3, 4, 5];
const spliced = arr.splice(1, 2);
console.log(spliced);
console.log(arr);
```
출력결과: [2, 3]
         [1, 4, 5]

### slice
특정 인덱스의 원소를 추출, 삭제하지 않음, 두번째 인자는 포함하지 않는 인덱스(<)
```JavaScript
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 2);
console.log(sliced);
console.log(arr);
```
출력결과: [2]
         [1, 2, 3, 4, 5]
         
### shift
첫번째 원소를 제거하면서 반환
```JavaScript
const arr = [1, 2, 3, 4, 5];
const value = arr.shift();
console.log(value);
console.log(arr);
```
출력결과: 1
         [2, 3, 4 ,5]

### pop
마지막 원소를 제거하면서 반환
```JavaScript
const arr = [1, 2, 3, 4, 5];
const value = arr.pop();
console.log(value);
console.log(arr);
```
출력결과: 5
         [1, 2, 3, 4]
         
### unshift
맨 앞에 원소 추가

### push
맨 뒤에 원소 추가

### concat
두 배열을 합침, 기존 배열은 수정되지 않음
```JavaScript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);
```
출력결과: [1, 2, 3, 4, 5, 6]

### join
배열을 문자열로 변경
```JavaScript
const arr = [1, 2, 3, 4, 5];
console.log(arr.join());
console.log(arr.join(' '));
console.log(arr.join(', ');
```
출력결과: 1,2,3,4,5
         1 2 3 4 5
         1, 2, 3, 4, 5


### reduce
```JavaScript
// 합, 평균 구하기
const nums = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
const avg = numbers.reduce((accumulator, current, index, array) => {
  if(index === array.length - 1){
    return (accumulator + current) / array.length;
  }
}, 0);

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, cur) => {
  if(acc[cur]){
    acc[cur] += 1;
  } else{
    acc[cur] = 1;
  }
  return acc;
}, {});
/*
counts: {
  a: 3,
  b: 1,
  c: 2,
  d: 1, 
  e: 1
}
*/
```

## spread와 rest

### spread
```JavaScript
const slime = {
    name: '슬라임'
}
const cuteSlime = {
    ...slime,
    attribute: 'cute'
}
const purpleCuteSlime = {
    ...cuteSlime,
    color: 'green'
}
console.log(slime);
console.log(cuteSlime);
console.log(purpleSlime);
```
출력결과: 
{name: "슬라임"}
{name: "슬라임", attribute: "cute"}
{name: "슬라임", attribute: "cute", color: "purple"}

```JavaScript
const animals = ['dog', 'cat', 'bird'];
const anotherAnimals = [...animals, 'tiger'];
console.log(animals);
console.log(anotherAnimals);
```
출력결과:
["dog", "cat", "bird"]
["dog", "cat", "bird", "tiger"]
배열에서는 `animals.concat('tiger')`한 것과 동일

### rest
```JavaScript
function sum(...rest){
    return rest.reduce((acc, cur) => acc + cur, 0);
}
const result = sum(1, 2, 3, 4, 5, 6, 7);
```
