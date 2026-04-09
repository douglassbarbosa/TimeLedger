import { sumMinutes } from '../../src/domain/timeMath';

describe('sumMinutes', () => {
  it('returns the sum of two minute values', () => {
    expect(sumMinutes(30, 45)).toBe(75);
  });
});
