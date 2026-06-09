module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'bug',
        'fix',
        'hotfix',
        'refactor',
        'chore',
        'docs',
        'test',
        'performance'
      ]
    ],

    'subject-empty': [2, 'never'],
    'subject-case': [0]
  }
};