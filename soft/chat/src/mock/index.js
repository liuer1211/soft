import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/novelList', {code: '200', data: data.novelList})