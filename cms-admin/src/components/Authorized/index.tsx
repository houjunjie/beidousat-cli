import React, { ReactNode } from 'react';
import pathToRegexp from 'path-to-regexp'
import menu from '@/utils/menu';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

interface Iprops {
  authority: string,
  children: ReactNode,
  location: any,
  noAuthComponent?: any
}

const Authorized: React.SFC<Iprops> = ({ children, authority, location, noAuthComponent }) => {
  let current
  for (let index in menu) {
    if (menu[index].route && pathToRegexp(menu[index].route).exec(location.pathname)) {
      current = menu[index]
      break
    }
  }
  return (
    <React.Fragment>
      {
        current && current.authority ? current.authority.indexOf(authority) === -1 ? noAuthComponent || '' : children : ''
      }
    </React.Fragment>
  )
}

export default connect()(withRouter(Authorized));
