/**
 * 叠词 traveller traveler
 */

//  console.log(/^travell?er$/.test('traveller'))
//  console.log(/^travell?er$/.test('traveler'))

/**
 * open-tag: / <[^\/>][^>]> /   / <[^\/][^>]*> /    / ^<[^\/]([^>]*[^\/])?>$ /
 * close-tag: / <\/[^>]> /
 * self-closing-tag: / <[^>/]\/>
 *  */  
// console.log(/^<[^>]+>$/.test('<html>'))

// 双引号
// console.log(/^\"[^\"]*\"$/.test('\"abc\"'))

/**
 * 单行注释： / \/\/.* /
 * 多行代码注释 ： / \/\*[\s\S]*?\*\/ /
 * 超链接<a xxx ></a> : / <a\s[\s\S]*?<\/a> /
 * <script xxx></script> : / <script[\s>][\s\S]+?<\/script> /
 */