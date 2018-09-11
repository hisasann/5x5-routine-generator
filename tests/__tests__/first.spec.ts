// sample jest code
describe('adder', () => {
  const timeout: number = 10000;

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  let beforeAllValue: number;
  beforeAll(async done => {
    console.log('beforeAll');
    setTimeout(() => {
      beforeAllValue = 10;
      done();
    }, 5000);
  }, timeout);

  afterAll(() => {
    console.log('afterAll');
  });

  test(
    'beforeAllValue to equal 10',
    () => {
      expect(beforeAllValue).toBe(10);
    },
    timeout,
  );
});
