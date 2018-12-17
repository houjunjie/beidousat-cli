/* global window */
/* global document */
import React from 'react'
// import pathToRegexp from 'path-to-regexp'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { Layout } from 'antd'
import Header from '@/components/Layout/Header'
import Bread from '@/components/Layout/Bread'
import SiderMenu from '@/components/Layout/SiderMenu'
import menu from '@/utils/menu'
import config from '@/utils/config'
import styles from './index.css'
const { Content, Sider } = Layout
const { prefix } = config
interface Iprops {
  children: any,
  dispatch: any,
  app: any,
  loading: any,
  location: any,
}
const App = ({
  children, dispatch, app, location,
}: Iprops) => {
  const {
    siderFold, isNavbar, navOpenKeys,
  } = app;
  const headerProps = {

    location,
    logout () {
      dispatch({ type: 'app/logout' })
    },
    switchSider () {
      dispatch({ type: 'app/switchSider' })
    },
  }
  const siderProps = {
    menu,
    location,
    siderFold,
    navOpenKeys,
    changeOpenKeys (openKeys: any) {
      window.localStorage.setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
      dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
    },
  }
  // const { logo } = config;
  const breadProps = {
    menu,
    location
  }
  return (
    <div>
      <Layout>
          {!isNavbar && <Sider
          trigger={null}
          collapsible
          collapsed={siderFold}
        >
          {siderProps.menu.length === 0 ? null : <SiderMenu {...siderProps} />}
        </Sider>}
        <Layout style={{ height: '100vh', overflow: 'scroll' }} id="mainContainer">
          <Header {...headerProps} />
          <Content className={styles.content}>
              <Bread {...breadProps} />
              {children}
            </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(connect(({ app, loading }: Iprops) => ({ app, loading }))(App))
