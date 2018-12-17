import React from 'react'
import classnames from 'classnames'
// import PropTypes from 'prop-types'
import Loader from '@/components/Loader/Loader'
import styles from './Page.less'

interface Iprops {
  className?: string,
  children?: any,
  loading?: boolean,
  inner?: boolean
}

export default class Page extends React.Component<Iprops> {
  public render () {
    const {
      className, children, loading = false, inner = false,
    }: any = this.props
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden',
    }
    return (
      <div
        className={classnames(className, {
          [styles.contentInner]: inner,
        })}
        style={loading ? loadingStyle : {}}
      >
        {loading ? <Loader spinning={true} /> : ''}
        {children}
      </div>
    )
  }
}


// Page.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node,
//   loading: PropTypes.bool,
//   inner: PropTypes.bool,
// }
