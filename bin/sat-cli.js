#! /usr/bin/env node
const fs = require('fs');

const program = require('commander'); //终端输入处理框架
const download = require('download-git-repo'); // 拉取github上的文件。
const chalk = require('chalk'); // 改变输出文字的颜色
var inquirer = require('inquirer');  //提示文本
const ora = require('ora'); // 小图标（loading、succeed、warn等
const package = require('../package.json'); //获取版本信息
const symbols = require('log-symbols'); //美化终端
const re = new RegExp("^[a-zA-Z\-]+$"); //检查文件名是否是英文，只支持英文
const handlebars = require('handlebars'); //修改模版文件内容

/**
 * 模版对应分支
 */
const getType = {
  "react-component------ES6组件": "component",
}


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
	// console.log(program,222)
	let pathArr = program.create.split('/');
	const name = pathArr.pop();
	pathArr = pathArr.length > 0 ? pathArr.join('/')+'/' : '';
	console.log(pathArr, name)
	if (!re.test(name)) {
		console.log(symbols.error, chalk.red('错误!请输入英文名称'));
		return
	}
	if (!fs.existsSync(`${pathArr}${name}.tsx`)) {
		inquirer
			.prompt([
				{
					type: 'list',
					name: 'type',
					message: '请选择模版类型?',
					choices: [
						'react-component------ES6组件',
					],
				},
			])
			.then(answers => {
				console.log(symbols.success, chalk.green('开始创建..........,请稍候'));
				const spinner = ora('正在下载模板...');
				spinner.start();
				const type = getType[answers.type]
				download(`houjunjie/beidousat-temp/#${type}`, pathArr, err => {
					if (err) {
						spinner.fail();
					} else {
						spinner.succeed();
						var files = fs.readdirSync(pathArr);
						for (let i = 0; i < files.length; i++) {
							let fileName = `${pathArr}${files[i]}`;
							if (fs.existsSync(`${fileName}`)) {
								const content = fs.readFileSync(fileName).toString();
								const result = handlebars.compile(content)({ template: name, });
								fs.writeFileSync(fileName.replace('template',name), result);
								fs.unlinkSync(fileName);
							}
						}
						console.log(symbols.success, chalk.green('模版创建成功'));
						// let count = 0; //所有文件修改完成，提示
						// for (let i = 0; i < files.length; i++) {
						// 	// if (includes.includes(files[i])) {  //是否需要修改名称
						// 	// 	continue
						// 	// }
						// 	//获取文件列表
						// 	var index = files[i].indexOf('.');
						// 	// console.log(index, files, 7777)
						// 	// console.log(`${pathArr}${files[i]}`,1)
						// 	// console.log(`${pathArr}${name}${files[i].substring(index)}`,2)
						// 	fs.rename(
						// 		`${pathArr}${files[i]}`,
						// 		`${pathArr}${name}${files[i].substring(index)}`,
						// 		err => {
						// 			if (err) {
						// 				console.log('---错误');
						// 			}
						// 			count++;
						// 			if (count + 1 == files.length) { //排除index.js文件
						// 				console.log(symbols.success, chalk.green('模版创建成功'));
						// 			}
						// 		}
						// 	);
						// }
					}
				});
			});
	} else {
		console.log(symbols.error, chalk.red('有相同名称模版'));
	}
}