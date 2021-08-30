const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const { errLog, successLog } = require('../utils/log')
const downloadUrl = require('../config/download-url')

const create = (projectName, options) => {
  const optionKeys = Object.keys(options)
  if (optionKeys.length) {
    const url = downloadUrl[optionKeys[0]]
    downloadFunc(url, projectName)
    return;
  }
  inquirer.prompt([
    {
      type: 'list',
      name: 'framTeplate',
      message: '请选择模板类型',
      choices: ['vue3-admin-element', 'uni-app-wechat', 'react-board']
    }
  ]).then(answer => {
    const { framTeplate } = answer
    const url = downloadUrl[framTeplate]
    downloadFunc(url, projectName)
  })
}

function downloadFunc(url, projectName) {
  const spinner = ora()
  spinner.text = '正在下载模板中...'
  spinner.start()
  console.log(url);
  download(
    url,
    projectName,
    { clone: true },
    function(err) {
      if (err) {
        spinner.fail('模板下载失败')
        errLog(err)
      } else {
        spinner.succeed('模板下载成功')
        successLog('项目初始化完成')
      }
    }
  )
}

module.exports = create