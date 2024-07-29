import styled from "eslint-plugin-styled-components-a11y";

module.exports = [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb",
      "plugin:prettier/recommended",
    ],
    plugins: ["react", "prettier", { "styled-components": styled }],
    rules: {
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          semi: true,
          tabWidth: 2,
          siglequote: false,
        },
      ],
      "styled-components/rule-name": 2,
    },
    settings: {
      react: { version: "detect" },
    },
  },
];