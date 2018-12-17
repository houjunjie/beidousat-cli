import React from 'react'
// import PropTypes from 'prop-types'
// import { config } from '@/utils'
import styles from './index.less'
import Menus from '@/components/Layout/Menus'

interface Iprops {
  menu: any[],
  siderFold: boolean,
  location: any,
  navOpenKeys: any[],
  changeOpenKeys: any,
}

const SiderMenu = ({
  siderFold, location, navOpenKeys, changeOpenKeys, menu,
}: Iprops) => {
  const menusProps = {
    menu,
    siderFold,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div>
      <div className={styles.logo}>
        <img alt="logo" src={require('../../logo_w.png')} />
      </div>
      <Menus {...menusProps} />
    </div>
  )
}

// Sider.propTypes = {
//   menu: PropTypes.array,
//   siderFold: PropTypes.bool,
//   darkTheme: PropTypes.bool,
//   location: PropTypes.object,
//   changeTheme: PropTypes.func,
//   navOpenKeys: PropTypes.array,
//   changeOpenKeys: PropTypes.func,
// }

export default SiderMenu
