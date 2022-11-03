const fn = require('./fn');

let user;

// beforeEach(async () => {
//   user = await fn.connectUserDb();
// });
beforeAll(async () => {
  user = await fn.connectUserDb();
});

// afterEach(async () => {
//   await fn.disconnectDb();
// });
afterAll(async () => {
  await fn.disconnectUserDb();
});

test('이름은 Mike', () => {
  expect(user.name).toBe('Mike');
});

test('나이는 30', () => {
  expect(user.age).toBe(30);
});

describe('Car 관련 작업', () => {
  let car;

  beforeAll(async () => {
    car = await fn.connectCarDb();
  });

  afterAll(async () => {
    await fn.disconnectCarDb();
  });

  // 이 테스트 코드는 건너 뜀
  test.skip('브랜드는 bmw', () => {
    expect(car.brand).toBe('bmw');
  });

  // 이 테스트 코드만 실행됨
  test.only('색상은 red', () => {
    expect(car.color).toBe('red');
  });
});
