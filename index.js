module.exports = {
  rules: {
    "array-bracket-newline": ["error", "consistent"],

    "array-element-newline": ["error", "consistent"],

    "comma-dangle": ["error", "always-multiline"],

    "eol-last": ["error", "always"],

    "eqeqeq": ["error", "always"],

    "implicit-arrow-linebreak": ["error", "beside"],

    "indent": ["error", 2, {"SwitchCase": 1}],

    "jsx-quotes": ["error", "prefer-double"],

    "lines-between-class-members": ["error", "always"],

    "new-parens": ["error", "always"],

    "no-multi-spaces": "error",

    "no-multiple-empty-lines": ["error", {"max": 1}],

    "no-trailing-spaces": "error",

    "no-whitespace-before-property": "error",

    "object-curly-spacing": ["error", "never"],

    "object-property-newline": "error",

    "operator-linebreak": ["error", "before"],

    "padded-blocks": ["error", "never"],

    "padding-line-between-statements": ["error", {"blankLine": "always", "prev": "*", "next": "return"}],

    "quotes": ["error", "double"],

    "rest-spread-spacing": ["error", "never"],

    "semi": ["error", "always"],

    "semi-spacing": ["error", {"before": false, "after": true}],

    "wrap-regex": "error",
  },
};
