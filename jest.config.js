module.exports = {
  roots: [
    "<rootDir>/src/",
    "<rootDir>/tests/",
    "<rootDir>/tests/unit"
  ],

  moduleFileExtensions: ["js"],

  transform: {
    "^.+\\.js$": "babel-jest",
  },

  // remove a cobertura de teste de determinado lugar
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/"
  ]
}
