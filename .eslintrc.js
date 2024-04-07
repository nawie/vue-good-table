module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/base", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    indent: ["error", 2],
    curly: ["error", "multi-or-nest"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: [
      "error",
      "always",
    ],
    "max-len": "off",
    "linebreak-style": "off",
    camelcase: [
      "error",
      { properties: "never", ignoreDestructuring: true, ignoreImports: true }
    ],
    "arrow-parens": ["error", "as-needed"],
    "vue/multiline-html-element-content-newline": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-continue": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ]
  }
};
