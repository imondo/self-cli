const spawn = require('child_process').spawn;
const { successLog, errLog, infoLog } = require('../utils/log');

const runInstall = async function (
  cwd,
  callback = () => {},
  executable = 'npm',
  args = ['install']
) {
  infoLog('正在安装项目依赖');
  await new Promise((resolve, reject) => {
    const installProcess = spawn(executable, args, {
      cwd: cwd,
      stdio: 'inherit',
      shell: true,
    });
    installProcess.on('exit', () => {
      successLog('依赖安装完成!');
      resolve();
    });
    installProcess.on('error', err => {
      errLog('依赖安装失败');
      reject(err);
    });
  })
    .then(() => {
      callback();
    })
    .catch(err => {
      errLog('依赖安装出现错误');
      console.log(err);
    });
};

module.exports = runInstall

