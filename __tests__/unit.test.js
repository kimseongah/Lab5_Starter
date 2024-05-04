// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('rightPhoneNumber', () => {
  expect(isPhoneNumber('858-241-1333')).toBe(true);
});
test('rightEmail', () => {
  expect(isEmail('abc123@ucsd.edu')).toBe(true);
});
test('wrongStrongPassword', () => {
  expect(isStrongPassword('a')).toBe(false);
});
test('wrongDate', () => {
  expect(isDate('abc123@ucsd.edu')).toBe(false);
});