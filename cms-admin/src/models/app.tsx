// import { routerRedux } from 'dva/router'
// import { parse } from 'qs'
import { config } from '../utils'
// import { getService } from 'services/app'
// import { parse } from 'query-string'

const { prefix } = config

interface Istate {
  user:  object,
  user_service:  any[],
  menu:  any[],
  menuPopoverVisible:  boolean,
  siderFold:  any,
  isNavbar:  boolean,
  navOpenKeys:  any,
  locationPathname:  string,
  locationQuery:  object,
  breadcrumb: any[]
}
export default {
  namespace: 'app',
  state: {
    user: {},
    user_service: [],
    breadcrumb: [],
    menu: [
      // {
      //   id: 1,
      //   icon: 'laptop',
      //   name: 'Dashboard',
      //   router: '/dashboard',
      // },
    ],
    menuPopoverVisible: false,
    siderFold: window.localStorage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: window.localStorage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)+'') || [],
  },
  subscriptions: {

    setup ({ dispatch }: any) {
      // dispatch({ type: 'query' })
      // let tid: any
      // window.onresize = () => {
      //   clearTimeout(tid)
      //   tid = setTimeout(() => {
      //     dispatch({ type: 'changeNavbar' })
      //   }, 300)
      // }
    },

  },
  reducers: {
    updateState (state: Istate, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },

    switchSider (state: Istate) {
      window.localStorage.setItem(`${prefix}siderFold`, !state.siderFold+ '')
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },

    // switchTheme (state: Istate) {
    //   window.localStorage.setItem(`${prefix}darkTheme`, !state.darkTheme)
    //   return {
    //     ...state,
    //     darkTheme: !state.darkTheme,
    //   }
    // },

    switchMenuPopver (state: Istate) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible,
      }
    },

    // handleNavbar (state: Istate, { payload }: any) {
    //   return {
    //     ...state,
    //     isNavbar: payload,
    //   }
    // },

    handleNavOpenKeys (state: Istate, { payload: navOpenKeys }: any) {
      return {
        ...state,
        ...navOpenKeys,
      }
    },
    logout (state: Istate) {
      window.localStorage.clear();
      window.location.href = '/'
    },
  },
  effects: {
    // * query ({
    //   payload,
    // }: any, { call, put, select }: any) {
    //   const data = yield call(getService, payload)
    //   const { locationPathname } = yield select((_: any) => _.app)
    //   if (!data.success &&config.openPages && config.openPages.indexOf(locationPathname) < 0) {
    //     yield put(routerRedux.push({
    //       pathname: '/login',
    //       search: stringify({
    //         from: locationPathname,
    //       }),
    //     }))
    //   }
    // },
    // * changeNavbar (action: any, { put, select }: any) {
    //   const { app } = yield (select((_: any) => _))
    //   const isNavbar = document.body.clientWidth < 769
    //   if (isNavbar !== app.isNavbar) {
    //     yield put({ type: 'handleNavbar', payload: isNavbar })
    //   }
    // },
  },
}
