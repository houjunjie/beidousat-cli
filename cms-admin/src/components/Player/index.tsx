import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Alert } from 'antd';
import styles from 'components/Player/index.less';

interface Iprops {
  visible: boolean,
  url: string,
  onCancel: any,
}
interface Istate {
  isError: boolean
}
class Player extends Component<Iprops, Istate> {
  public state = {
    isError: false,
  }

  public initPlayer(url: string) {
    // 播放器属性
    const playerProps = {
      autoPlay: true,
      controls: true,
      loop: true,
      preload: 'metadata',
      onError: (error: any) => {
        this.setState({ isError: true });
      },
    }
    if (this.state.isError || !url) {
      return (
        <Alert
          message={`当前资源无法播放，请检查 ${url} 地址是否正确。`}
          type="error"
          showIcon={true}
        />
      )
    }

    if (url.indexOf('.mp3') !== -1) {
      return (<audio src={url} {...playerProps} />);
    } else {
      return (<video src={url} {...playerProps} />);
    }
  }

  public render() {
    const { visible, url, onCancel } = this.props;
    return (
      <div>
        <div
          className={styles.cover}
          style={{ display: visible ? 'block' : 'none' }}
        />
        <div
          className={styles.wrapper}
          onClick={() => onCancel(false)}
          style={{ display: visible ? 'flex' : 'none' }}
        >
          <div
            className={styles.modal}
            onClick={e => {e.stopPropagation();}}
          >
            {this.initPlayer(url)}
          </div>
        </div>
      </div>
    );
  }
}

// Player.propTypes = {
//   visible: propTypes.bool,
//   url: propTypes.string,
//   onCancel: propTypes.func,
// }

export default Player;
