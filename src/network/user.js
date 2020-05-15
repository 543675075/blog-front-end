import { request } from './index'

export function register(params){
  return request({
    url: 'register',
    method: 'post',
    data: {
      params
    }
  })
}