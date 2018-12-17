import * as React from 'react'
import classnames from 'classnames';
// import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Layout } from 'antd'
// import './Header.less'
import styles from './Header.less'
import { getLocalStorage } from '@/utils/utils';
// import Menus from './Menu'

const { SubMenu } = Menu

const Header = ({
  logout, switchSider, siderFold,
}: any) => {
  const handleClickMenu = (e: any) => {
    // e.key === 'logout' && logout();
    // e.key === 'switch' &&  (window.location.href = '/#/login');
    switch (e.key) {
      case 'logout':
        logout();
        break;

      case 'switch':
        window.location.href = '/#/platform';
        break;
      default:
        break;
    }
  }
  const SystemAdmin = getLocalStorage('SystemAdmin')
  const name = SystemAdmin ? SystemAdmin.name: ''
  // const menusProps = {
  //   menu,
  //   siderFold: false,
  //   darkTheme: false,
  //   isNavbar,
  //   handleClickNavMenu: switchMenuPopover,
  //   location,
  //   navOpenKeys,
  //   changeOpenKeys,
  // }
  return (
    <Layout.Header className={styles.header}>
      <div
        className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {name}
            </span>}
          >
            <Menu.Item key="switch">
              切换系统
            </Menu.Item>
            <Menu.Item key="logout">
              退出登录
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

export default Header
