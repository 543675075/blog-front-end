import { request } from './index'


// 注册(params:昵称，邮箱，密码)
export function register(params){
  return request({
    url: 'register',
    method: 'post',
    data: {
      params
    }
  })
}

// 登陆(params:邮箱，密码,token)
export function login(params) {
  return request({
    url: 'login',
    method: 'post',
    data: {
      params
    }
  })
}


// 发表文章(params:标题，分类，标签，作者，内容)
export function publish(params) {
  return request({
    url: 'article-add',
    method: 'post',
    data: {
      params
    }
  })
}