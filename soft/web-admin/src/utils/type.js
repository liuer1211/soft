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