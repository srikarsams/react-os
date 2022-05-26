module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['.', 'node_modules'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};
