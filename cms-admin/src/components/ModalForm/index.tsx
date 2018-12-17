import React, { MouseEvent } from 'react';
import { Modal, Form, Button } from 'antd';
import styles from './index.less';
// import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item;

interface Iprops {
  okText?: string,
  cancelText?: string,
  width?: string,
  visible: boolean,
  title: string,
  loading?: boolean,
  handleOk(e: MouseEvent<HTMLElement>): void,
  handleCancel(): void,
}
const st = {marginRight: '10px'};
class ModalForm extends React.PureComponent<Iprops>{

  /**
   * handleOk
   */
  public handleOk = (e: MouseEvent<HTMLElement>) => {
    this.props.handleOk(e);
  }

  /**
   * handleCancel
   */
  public handleCancel = () => {
    this.props.handleCancel();
  }

  public render() {
    const {
      visible, title, okText, cancelText, children, width, loading
    } = this.props;
    return(
      <Modal
        title={title}
        visible={visible}
        width={width ? width: '700px'}
        // onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={null}
      >
        <Form  layout="inline" onSubmit={this.handleOk}>
          {children}
          <FormItem
            className={styles.modalFooter}
          >
            <Button style={st} key="cancel" onClick={this.handleCancel}>{ cancelText || "取消"}</Button>
            <Button key="submit" type="primary" htmlType="submit" loading={loading}>
              {okText || "确认"}
            </Button>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
export default ModalForm;
