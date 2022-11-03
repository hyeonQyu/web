const fn = require('./fn');

test('1 === 1', () => {
  expect(1).toBe(1);
});

test('2 + 3 = 5', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('3 + 3 !== 5', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test('이름, 나이', () => {
  // 객체 비교는 toEqual
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: 'Mike',
    age: 30,
  });
});

test('이름, 나이 strinct equal', () => {
  // 엄격한 객체 비교 (undefined 값 등)
  expect(fn.makeUser('Mike', 30)).not.toStrictEqual({
    name: 'Mike',
    age: 30,
  });
});

test('null 확인', () => {
  expect(null).toBeNull();
});

test('0 == false', () => {
  // 반대는 toBeTruthy
  expect(fn.add(1, -1)).toBeFalsy();
});

test('ID는 10자 이하', () => {
  const id = 'ABC';
  expect(id.length).toBeLessThanOrEqual(10);
});

test('0.1 + 0.2 = 0.3', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('H in Hello World?', () => {
  expect('Hello World').toMatch(/H/);
});

test('Mike in array', () => {
  const user = 'Mike';
  const userList = ['Tom', 'Mike', 'Kai'];
  expect(userList).toContain(user);
});

test('has Error', () => {
  expect(() => fn.throwError()).toThrow();
  expect(() => fn.throwError()).toThrow('Error!');
});

test('3초 후에 받은 이름 Mike', (done) => {
  fn.getName((name) => {
    expect(name).toBe('Mike');
    done();
  });
});

test('3초 후에 받은 나이 30', () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

test('3초 후에 받은 나이 30', () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

test('3초 후에 받은 나이 30', async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
