export default class User {
  emailAddr:any;
  enabled:boolean;
  id:any;
  password:string;
  realName:string;
  roleList: string[];
  token: any;
  username: any;
  constructor (data:any) {
    this.emailAddr = data.emailAddr
    this.enabled = data.enabled
    this.id = data.id
    this.password = data.password
    this.realName = data.realName
    this.roleList = data.roleList
    this.token = data.token
    this.username = data.username
  }

  save () {
    let key = this.constructor.name
    let data = Object.assign({}, this)
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  saveTemp () {
    let key = `temp-${this.constructor.name}`
    let data = Object.assign({}, this)
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  static loadTemp () {
    let key = `temp-${this.name}`
    let data = window.localStorage.getItem(key) || '{}'

    data = JSON.parse(data)
    return new this(data)
  }

  static clearTemp () {
    let k = `temp-${this.name}`
    window.localStorage.removeItem(k)
  }

  static load () {
    let key = this.name
    let data:any = window.localStorage.getItem(key)
    data = JSON.parse(data)
    return new this(data)
  }

  static current () {
    return this.load()
  }

  static hasCached () {
    let key = this.name
    let data = window.localStorage.getItem(key)
    return data !== null
  }

  static hasToken () {
    if (User.hasCached()) {
      let u = User.load()
      return u.token !== undefined
    } else {
      return false
    }
  }

  static key () {
    return this.name
  }

  static clear () {
    let k = this.key()
    window.localStorage.removeItem(k)
  }

  isEmpty () {
    return this.username === undefined
  }
}
