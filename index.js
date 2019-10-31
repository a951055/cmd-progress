/**
 * @format
 */
let slog = require("single-line-log").stdout;
/**
 * 进度条工具
 */
export default class Progress {
  // 进度条名称
  desc = "进度";
  // 进度条长度
  lineLength = 100;
  // 总进度
  total = 100;
  // 当前进度
  current = 0;
  // 未完成显示字符
  waitStr = "★";
  // 完成显示字符
  completedStr = "☆";

  /**
   * instantiation
   * @param {*} desc progress's name
   * @param {*} lineLength line length
   */
  constructor(desc, lineLength) {
    this.desc = desc;
    this.lineLength = lineLength ? lineLength : 100;
  }
  /**
   * render progress
   * @param {*} total
   * @param {*} completed
   */
  render(total, completed) {
    let completedLine = Math.floor((completed / total) * this.lineLength); // 计算需要多少个 ★ 符号来拼凑图案
    let progressLine = new Array(this.lineLength).fill("☆").map((c, i) => (i < completedLine ? this.completedStr : this.waitStr));
    // 拼接最终文本
    var printStr = `${this.desc} => ${progressLine} | ${(completed / total).toFixed(2) * 100}%`;
    // 在单行输出文本
    slog(printStr);
  }
}
