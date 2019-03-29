import axios from 'axios'
import User from 'model/User'
import router from '../router/index.ts'
import Vue from 'vue'

// const ErrorCode = -1
const SuccessCode = 0
const LessTokenCode = 999

const redirct = function (path) {
  router.push({
    path,
  })
}

let requestHeader = function (path) {
  let expectPath = '/nano/user/model/login'

  let p = {}
  if (path === expectPath) {
    //
  } else {
    // let u = User.load()
    // p.token = u.token
    p = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      sysCode: 'market',
      'market-token': '26FB9C933A3E4AEDAF03A22ACF7C7810_0'
    }
  }
  return p
}

const get = function (path, params) {
  let p = params
  return axios.get(path, {
    params: p,
    headers: requestHeader(path),
  })
    .then(function (response) {
      let code = response.data.code
      if (code === SuccessCode) {
        return response.data.data
      } else {
        let error = new Error()
        error.response = response
        throw error
      }
    })
    .catch(function (error) {
      let response = error.response
      let vue = new Vue()
      let message = response.data.message

      vue.$message({
        message,
        type: 'error',
      })
      if (response.status === LessTokenCode) {
        User.clear()
        redirct('/login')
      }
      throw error
    })
}

const post = function (path, params) {
  let headers = requestHeader(path)
  return axios.post(path, params, { headers, })
    .then(function (response) {
      let code = response.data.code
      if (code === SuccessCode) {
        return response.data.data
      } else {
        let error = new Error()
        error.response = response
        throw error
      }
    })
    .catch(function (error) {
      let response = error.response
      console.log('error', error, response)
      let vue = new Vue()
      let message = response.data.msg || response.data.message

      vue.$message({
        message,
        type: 'error',
      })
      if (response.status === LessTokenCode) {
        User.clear()
        redirct('/login')
      }
      throw error
    })
}

export default {
  get,
  post,
}
