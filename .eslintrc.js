module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue 작성 규칙 설정 (2단계로 설정)
    //'plugin:vue/vue3-essential', // 1단계 코드 규칙
    "plugin:vue/vue3-strongly-recommended", // 2단계 코드 작성규칙
    //'plugin:vue/vue3-recommended', // 3단계 코드 규칙

    // js - eslint 작성규칙 설정
    "eslint:recommended", // eslint의 권장규칙으로 코드를 작성하도록 설정
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // custom 규칙을 추가할 때 작성
  },
  // "vue/singleline-html-element-content-newline": "off",
  // "vue/multiline-html-element-content-newline": "off",
};
