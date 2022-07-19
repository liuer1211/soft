/*
* 包含多个应用的接口
* */
import requests from './ajax'

// 小说正剧列表
export const reqQueryNovelList = (params)=>requests({url:"/queryNovalList",method:"post",data:params});

// 小说正剧列表详情
export const reqQueryNovalDetail = (params)=>requests({url:"/queryNovalDetail",method:"post",data:params});

// 小说正剧列表详情
export const reqQueryNovalAttributeList = (params)=>requests({url:"/queryNovalAttributeList",method:"post",data:params});