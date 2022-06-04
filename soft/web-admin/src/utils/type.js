// 级别类型转换
export const levelTypeToName = (code) => {
  let value = ''
  switch(code) {
    case '01':
      value = '初级';
      break;
    case '02':
      value = '中级';
      break;
    case '03':
      value = '高级';
      break;
    default:
      break;
  }
  return value;
}

// 文章类型转换
export const articleTypeToName = (code) => {
  let value = ''
  switch(code) {
    case '01':
      value = '最新';
      break;
    case '02':
      value = '最热';
      break;
    case '03':
      value = '人文';
      break;
    case '04':
      value = '科技';
      break;
    case '05':
      value = '历史';
      break;
    case '06':
      value = '经济';
      break;
    case '07':
      value = '诗词';
      break;
    case '08':
      value = '歌赋';
      break;
    case '09':
      value = '散文';
      break;
    default:
      break;
  }
  return value;
}

// 小说类型转换
export const novelTypeToName = (code) => {
  let value = ''
  switch(code) {
    case '01':
      value = '武侠';
      break;
    case '02':
      value = '爱情';
      break;
    case '03':
      value = '家国';
      break;
    case '04':
      value = '文艺';
      break;
    case '05':
      value = '青春';
      break;
    default:
      break;
  }
  return value;
}

// 小说类型转换 返回
export const novelTypeToNames = (list) => {
  let value = ''
  let arr = []
  list.forEach(element => {
    arr.push(novelTypeToName(element))
  });
  value = arr.join('/')
  return value;
}