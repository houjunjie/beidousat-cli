import React from 'react'
// import PropTypes from 'prop-types'
import { Upload, Modal } from 'antd';

interface Iprops {
  url: string,
  folder: string,
  api: string,
  handleChange: (url: string) => void
}
interface Istate {
  fileList: any,
  previewVisible: boolean,
  previewImage: string
}

class UploadFile extends React.Component<Iprops, Istate>{
  public state = {
    fileList: this.props.url ? [{
      size: 1,
      uid: '-1',
      name: '',
      // status: 'done',
      url: this.props.url,
      type: 'select'
    }] : [],
    previewImage: '',
    previewVisible: false
  }

  render() {
    const {
      folder, api
    } = this.props;
    const {
      fileList, previewVisible, previewImage
    } = this.state;
    const uploadButton = (
      <div>
        <div className="ant-upload-text">上传</div>
      </div>
    )
    return (
      <React.Fragment>
        <Upload
          name="file"
          action={api}
          listType="picture-card"
          fileList={fileList}
          data={{ folder: folder }}
          // showUploadList={false}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          className="upload"
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </React.Fragment>
    )
  }

  private handlePreview = (file: any) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  private handleCancel = () => {
    this.setState({
      previewVisible: false,
    })
  }

  private handleChange = ({ fileList }: any) => {
    if(fileList[0]){
      fileList[0].response && this.props.handleChange(fileList[0].response.data.url)
    }else {
      this.props.handleChange('')
    }
    this.setState({
      fileList,
    })

  }
}

export default UploadFile;
