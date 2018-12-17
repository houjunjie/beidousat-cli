// import * as moment from 'moment'
import _ from 'lodash'
import { routerRedux } from 'dva/router'
import ExportJsonExcel from 'js-export-excel'
// import * as lodash from 'lodash'
// import * as  from 'jsrsasign'
/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g

export function isUrl (path: string) {
  return reg.test(path)
}

// 判断浏览器是否支持 hasLocalSotrage
const hasLocalSotrage = function () {
  // return window.Storage && window.localStorage && window.localStorage instanceof Storage
  return window.localStorage && window.localStorage instanceof Storage
}
// 设置cookie
const setCookie = function (key: string, value: object, time: number) {
  // let t = day || 30;
  const d = new Date()
  d.setTime((time * 1000))
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${key}=${value}; ${expires}`
}
// 获取cookie
const getCookie = function (name: string) {
  let arr: any
  const r = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  arr = document.cookie.match(r)
  if (arr) {
    return arr[2]
  }
  return null
}
/**
 * 设置local
 * @param {[type]} key   [键名]
 * @param {[type]} value [键值]
 * @param {[type]} 过期时间 秒
 */
export function setLocalStorage (key: string, value: object, time: number) {
  if (hasLocalSotrage()) {
    try {
      // safari 无痕模式下，直接使用localStorag.setItem 会报错
      const exp = time || null
      exp ? window.localStorage.setItem(key, JSON.stringify({ ...value, exp })) :
        window.localStorage.setItem(key, JSON.stringify({ ...value, exp }))
    } catch (error) {
      console.error('localStorage.setItem报错， ', error.message)
    }
  } else {
    setCookie(key, value, time)
  }
}
export function getLocalStorage (key: string) {
  if (hasLocalSotrage()) {
    const data = window.localStorage.getItem(key)
    if (!data) {
      return null
    }
    const dataObj = JSON.parse(data)
    if (dataObj.exp && new Date().getTime() > dataObj.exp * 1000) {
      window.localStorage.removeItem(key)
      // alert("信息已过期")
      // window.location.href = '/login'\
      routerRedux.push('/login')
      return false
    }
    // let dataObjDatatoJson = JSON.parse(dataObj.data)
    return dataObj
  }
  return getCookie(key)
}



/**
 * @param   {String}
 * @return  {String}
 */

export const queryURL = (name: string) => {
  const re = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substr(1).match(re)
  if (r != null) {return decodeURI(r[2])}
  return null
}

/**
 * 数组内查询
 * @param   {array}      array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
export function queryArray (array: any[], key: string, keyAlias = 'key') {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(_ => _[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export function arrayToTree (array: any[], id = 'id', pid = 'pid', children = 'children') {
  let data = _.cloneDeep(array)
  let result: any = []
  let hash = {}
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item) => {
    let hashVP = hash[item[pid]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}


// 安全数据，预防数据为Undefined
export function formatSaveData(source: any, key: string) {
  if(typeof source !== 'object' || !source || !source[key]){
    return ''
  }
  return source[key]
}

//
export function setDefaultData(d: string | number) {
  return !d ? '/' : d
}

/**
 * 导出excel
 * @param option {data: any[],fileName: string, sheetHeader: string[]}
 */
export function exportExcel(option: {data: any[],fileName: string, sheetHeader: string[]}) {
  const saveOption: any = {}
  saveOption.fileName = option.fileName;

  saveOption.datas = [
    {
      sheetData: option.data,
      sheetName: 'sheet',
      sheetFilter: Object.keys(option.data[0]),
      sheetHeader: option.sheetHeader,
    },
  ]

  const toExcel = ExportJsonExcel(saveOption)
  toExcel.saveExcel()
}
