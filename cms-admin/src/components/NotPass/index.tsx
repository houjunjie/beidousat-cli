import * as React from 'react';
import FormComponent from '@/components/FormComponent';
import { Modal, Input } from 'antd';

const {
  TextArea
} = Input

interface Iprops {
  visible:  boolean,
  // item: any,
  text: string,
  handleOk: (payload: {desc: string}) => void,
  handleCancel: () => void
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

class NotPass extends React.Component<Iprops> {
  private formRef: any;
  constructor(props: Iprops) {
    super(props);
    this.formRef = React.createRef()
  }
  render() {
    const {
      visible,text
    } = this.props;
    const formItems = [
      {
        label: '备注',
        key: 'desc',
        component: <TextArea  rows={4}/>,
        rules: [
          {
            required: false,
            // pattern: /^[0-9a-zA-Z]{8,16}$/,
            // message: '密码长度为8-16位，只能包含数字和英文',
          },
        ],
      },
    ]
    return (
      <Modal width="500px" onCancel={this.onCancel} onOk={this.onOk} visible={visible} title="审核不通过" >
        <p>{text}</p>
        <FormComponent ref={this.formRef} items={formItems} layout={formItemLayout}/>
      </Modal>
    )
  }
  private onOk = () => {
    this.formRef.current.validateFieldsAndScroll((err: any, values: any) => {
      if (err) {
        return
      }
      this.props.handleOk(values);
    })
  }
  private onCancel = () => {
    this.props.handleCancel()
  }
}
export default NotPass;

