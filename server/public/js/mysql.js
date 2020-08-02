// 引入模块
let mysql = require('mysql')

let options = {
  host     : 'localhost',    // 主机地址 （默认：localhost）
  user     : 'root',         // 用户名
  password : '10294519.',       // 密码
  database : 'a-plcture',  // 数据库名
  port     :  '3305'
  // charset  连接字符集（默认：'UTF8_GENERAL_CI'，注意字符集的字母都要大写）
}
module.exports = {
  handle (operate, callback,value) {
    // 创建连接
    let connection = mysql.createConnection(options);
    // 连接数据库
    connection.connect();
    // 数据库语句操作
    connection.query(operate,value, function (error, results, fields) {
      if (error) throw error;
      callback(results)
    });
    // 断开数据库
    connection.end();
  }
}