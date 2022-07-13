/*
* 包含多个应用的接口
* */
import requests from './ajax'
import ajaxMock from './ajaxMock'

// 小说正剧列表-mock
export const reqNovelList = () => ajaxMock('/novelList');

// 小说正剧列表
export const reqQueryNovelList = (params)=>requests({url:"/queryTitleList",method:"post",data:params});