#! /usr/bin/env node
const fs = require('fs');

const program = require('commander'); //终端输入处理框架
const download = require('download-git-repo'); // 拉取github上的文件。
const chalk = require('chalk'); // 改变输出文字的颜色
const ora = require('ora'); // 小图标（loading、succeed、warn等
const package = require('../package.json'); //获取版本信息
const symbols = require('log-symbols'); //美化终端
const re = new RegExp("^[a-zA-Z\-]+$"); //检查文件名是否是英文，只支持英文

program
  .version(package.version, '-v,--version')
	.option('-i, init [name]', '初始化 beidousat-admin 项目')
	.option('-c create [name]')
  .parse(process.argv);

// program.parse(process.argv);

if(program.init){
	const name = program.init;
	if (!re.test(name)) { //检查文件名是否是英文
		console.log(symbols.error, chalk.red('错误!请输入英文名称'));
		return 
	} 
	if (!fs.existsSync(name)) { //检查项目中是否有该文件
		console.log(symbols.success,chalk.green('开始创建..........,请稍候'));
		const spinner = ora('正在下载模板...');
		spinner.start();
		download(`houjunjie/beidousat-temp`, name, err => {
			if (err) {
				spinner.fail();
			} else {
				spinner.succeed();
				console.log(symbols.success, chalk.green('模版创建成功'));
			}
		});
	} else {
		console.log(symbols.error, chalk.red('有相同名称模版'));
	}
}
if (program.create) {
	console.log(program,222)
}