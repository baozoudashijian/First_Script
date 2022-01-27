## 开始使用

### demo.sh

> 执行步骤

+ 将脚本文件放到相应的位置

+ cd到相应位置

+ 执行sh template.sh

### diyShellCommand

> 特性

+ 传参数

+ if判断语句

+ 自定义command 
   
   1. 在$PATH中的任意bin目录下面，例如 /mingw64/bin
   2. 新建demo.exe (linux是.sh), 写入Bash Script
   3. 任意目录运行demo

### nodeScript

bash script运行在系统中, node script 运行在node环境中.

|         | bash    |  node  |
| --------   | -----:   | :----: |
| 绝对路径        | pwd      |   process.cwd()    |
| 切换路径        | cd Desktop/      |   process.chdir('./Desktop)    |
  
> 注意

+ pwd和process.cwd()的路径分隔符不一样
    1. /c/Users/zhangrongjie
    2. C:\\Users\\zhangrongjie'
    
### shengbang

windows要配置一些内容，我没有实现，linux待观察