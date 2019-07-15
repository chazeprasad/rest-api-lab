module.exports = {
    "testEnvironment": "node",
    "roots": [
        "<rootDir>/spec"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testMatch": ["<rootDir>/**/*Spec.+(ts|tsx|js)"],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "globals": {
        "ts-jest": {
            "tsConfig": "tsconfig.spec.json"
        }
    },
    "reporters": ["default", "jest-stare"],
    "testResultsProcessor": "./node_modules/jest-stare"
}
