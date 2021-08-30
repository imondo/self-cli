const path = require('path');
const chalk = require('chalk');
const fs = require('fs');

const hasProjectDir = (projectName) => {
  const targetPath = path.resolve(process.cwd(), projectName);
  console.log(targetPath);
  if (fs.existsSync(targetPath)) {
    console.log(chalk.red('当前项目文件夹已存在! 请重新创建!'));
    return true;
  }
  return false;
};

module.exports = {
  hasProjectDir,
};
