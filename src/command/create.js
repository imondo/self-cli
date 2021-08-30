const inquirer = require('inquirer');
const ora = require('ora');
const download = require('download-git-repo');
const downloadUrl = require('../config/download-url');
const { hasProjectDir } = require('../utils/util');
const { errLog, successLog, projectSuccess } = require('../utils/log');
const runInstall = require('../command/run-install');

const create = (projectName, options) => {
  if (hasProjectDir(projectName)) {
    return;
  }
  const optionKeys = Object.keys(options);
  if (optionKeys.length) {
    const url = downloadUrl[optionKeys[0]];
    downloadFunc(url, projectName);
    return;
  }
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'framTeplate',
        message: '请选择模板类型',
        choices: ['vue3-admin-element', 'uni-app-wechat', 'react-board'],
      },
      {
        type: 'list',
        name: 'install',
        message: '是否自动安装依赖',
        choices: ['是', '否'],
      },
    ])
    .then(answer => {
      const { framTeplate, install } = answer;
      const url = downloadUrl[framTeplate];
      downloadFunc(url, projectName, install);
    });
};

function downloadFunc(url, projectName, isInstall = '否') {
  const spinner = ora();
  spinner.text = '正在下载模板中...';
  spinner.start();

  const _isInstall = isInstall === '是' ? true : false;
  
  download(url, projectName, { clone: true }, function (err) {
    if (err) {
      spinner.fail('模板下载失败');
      errLog(err);
    } else {
      spinner.succeed('模板下载成功');
      successLog('项目初始化完成');
      if (_isInstall) {
        runInstall(projectName, () => {
          projectSuccess(projectName)
        })
      }
    }
  });
}

module.exports = create;
