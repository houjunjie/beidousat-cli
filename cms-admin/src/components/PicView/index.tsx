import * as React from 'react';
import { Modal } from 'antd';
import classnames from './index.less';
interface Iprops {
  src: string
  styles?: any
}

interface Istate {
  bigSrc: string,
  visible: boolean
}

class PicView extends React.PureComponent<Iprops, Istate> {
  state = {
    bigSrc: this.props.src,
    visible: false
  }
  render () {
    const {
      src, styles
    } = this.props;
    const {
      visible, bigSrc
    } =this.state;
    const sty = {
      width: '100px'
    }
    return (
      <span >
        {src && <span onClick={this.handleModal} className={classnames.img} style={styles}><img style={sty} src={src}/></span>}
        {
          visible && <Modal className={classnames.modal} visible onOk={this.handleModal} onCancel={this.handleModal} footer={null}>
            <div className={classnames.center}><img className={classnames.modalImg} src={bigSrc} /></div>
          </Modal>
        }
      </span>
    )
  }
  private handleModal = () =>{
    this.setState({
      visible: !this.state.visible
    })
  }
}

export default PicView
