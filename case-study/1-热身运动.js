/**
 * 1. 判断一个字符ch是否为数字
 */

function isNumChar(ch) {
    return ch == '0' || ch == '1' || ch == '2' || ch == '3' || ch == '4' || ch == '5' || ch == '6' || ch == "7" || ch == '8' || ch == '9'
}

function isNumCharRegExp(ch) {
    return /\d/.test(ch)
    // return /[0-9]/.test(ch)
}

let ch1 = 'a';
let ch2 = '8';

// console.log(isNumChar(ch1)) //false
// console.log(isNumChar(ch2)) //true
// console.log(isNumCharRegExp(ch2)) //true
// console.log(isNumCharRegExp(ch1)) //false


/**
 * 2. 判断一个字符串str是否为电话号码
 * 只考虑固定电话号码
 * 长度7～8位
 * 第一位不为0
 * */


function isPhoneNum(str) {
    if (str.length < 7 || str.length > 8 || str[0] == 0) return false;
    for (let i = 0; i < str.length; i++) {
        if (!isNumChar(str.charAt(i))) {
            return false
        }
    }
    return true
}

function isPhoneNumRegExp(str) {
    return /[1-9][0-9]{6,7}/.test(str);
}

let str1 = '1234567';
let str2 = '123abc12';

// console.log(isPhoneNum(str1)) // true
// console.log(isPhoneNum(str2)) // false
// console.log(isPhoneNumRegExp(str2)) // false
// console.log(isPhoneNumRegExp(str1)) // true

/**
 * 找出一段文本中所有电话号码
 */

//todo：待实现
