const CryptoJS = require('crypto-js');

// 定义一个函数来生成SHA-256哈希值
export function generateSHA256Hash() {
    const timestamp = Date.now().toString(); // 获取当前时间戳并转换为字符串
    const random = Math.random().toString(); // 生成随机数并转换为字符串
    const dataToHash = timestamp + random;
    const hash = CryptoJS.SHA256(dataToHash).toString();
    return hash;
  }
