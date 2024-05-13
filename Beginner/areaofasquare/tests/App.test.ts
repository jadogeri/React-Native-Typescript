import { getArea } from '../utils/getArea';

describe('testing Area of a circle', () => {
  test('radius 100 should give 10,000', () => {
    expect(getArea(100)).toBe(10000);
  });

  test('radius -20 should give 400', () => {
    expect(getArea(-20)).toBe(400);
  });
});