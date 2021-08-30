#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const config = require('../src/config/config');

// help
const help = () => {
  console.log('\n');
  console.log(chalk.green('可选模板参数:'));
  config.forEach((command, index) => {
    console.log(
      '  ',
      chalk.keyword('orange')(index + 1),
      `${command.command} 命令`
    );
    command.examples.forEach(example => {
      console.log(`     - self-cli ${example}`);
    });
  });
};

const registerOption = (cmd, option) => {
  return option && option.length ? cmd.option(...option) : cmd;
};

const registerCmd = (cmd, cof) => {
  const { command, desc, alias, options, action } = cof;
  const c = cmd.command(command).description(desc).alias(alias);

  options && options.reduce(registerOption, c);

  c.action(action);
  return cmd;
};

// 创建命令
config.reduce(registerCmd, program);

program.on('-h', help);
program.on('--help', help);
program.version('1.0.0').parse(process.argv);
