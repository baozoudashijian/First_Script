var fs = require("fs")

/*
* node index.js dirName
* [0]   [1]     [2]
*
* process.argv[2]
*
* */
var dirName = process.argv[2] // 获取第一个参数

fs.mkdirSync('./' + dirName) // mkdir $1
process.chdir('./' + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js
fs.writeFileSync('index.html', '') // echo "" > index.html
fs.writeFileSync('css/style.css', '') // echo  "" > css/style.css
fs.writeFileSync('js/main.js', '') // echo ""  > js/main.js

process.exit(0)
