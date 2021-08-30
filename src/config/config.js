module.exports = [
  {
    command: 'create <projectName>',
    desc: 'create a project name',
    alias: 'c',
    options: [
      ['-pc-a, --pc-admin', 'admin vue3 template'],
      ['-wx-uni, --uni-wechat', 'uni-app wechat template'],
      ['-r-b, --react-board', 'react board template'],
    ],
    action: require('../command/create'),
    examples: ['-pc-a', '--pc-admin', '-wx-uni', '--uni-wechat', '-r-b', '--react-board'].map((v) => `create projectName ${v}`)
  }
]