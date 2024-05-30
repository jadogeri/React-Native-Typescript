import { getArea } from '../utils/getResult';

describe('testing Area of a Triangle', () => {
  test('base 10 and height 20 should give 100', () => {
    expect(getArea(10,20)).toBe(100);
  });

  test('base 30 and height 60 should give 900', () => {
    expect(getArea(30,60)).toBe(900);
  });
});