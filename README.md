### cmd 打印进度工具

## use

```
 // 1. import

 import Progress from "cmd-Progress";

 /**
  * @params desc 进度条名称
  * @params lineLength 进度条字符长度
  */
 let progress = new Progress("进度:",50);

 // 2. render
 progress.render(total,currentCompletedNumber);

 /* 其他设置 */

 // 1. 设置打印字符
 progress.waitStr =`☆`; // 设置未完成字符
 progress.completedStr =`★`;  // 设置完成字符

```
