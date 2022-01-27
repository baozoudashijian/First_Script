## 关于脚本

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

### exit.sh

+ 创建成功 exit 0
+ 创建失败 exit 1

```
  demo xxx && "success"
```

注: 创建成功会打印 "success".

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

### 第三方脚本

以前我不知道下面这些命令是做什么的.But now

+ wget

+ curl

    type curl 我知道这个脚本呢来源于Git Bash /Bin不自带这个命令
    
    type wget 既不来自于Git Bash 也不来源于系统, 来源于我自己安装，然后我可以把他放到$PATH中任意一个bin路径下面
