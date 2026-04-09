import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  clearMocks: true,
};

export default config;
