/*
* 包含多个应用的接口
* */
import ajax from './ajax'

// 小说正剧列表
export const reqNovelList = () => ajax('/novelList')