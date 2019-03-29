import http from 'api/http'

/**
 * 登录范例
 * @param post /account/login 参数 phone=xxx&password=xxx
 */
export function login (params) {
  return http.post('/account/login', params)
}