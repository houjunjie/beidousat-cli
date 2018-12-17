import * as React from 'react';
import FormComponent,{ IItem } from '@/components/FormComponent';
import { Modal } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

interface Iprops {
  visible: boolean,
  formItems: IItem[],
  handleCancel: () => void,
  handleOk:<T>(payload: T) => void
}
const SearchModalComponent:React.SFC<Iprops> = ({visible,handleCancel,handleOk, formItems}) => {

  const formRef: any = React.createRef();
  // const formItems = [
  //   {
  //     label: '备注',
  //     key: 'desc',
  //     // component: <TextArea  rows={4}/>,
  //   },
  // ]
  const onOk = function () {
    formRef.current.validateFieldsAndScroll((err: any, values: any) => {
      if (err) {
        return
      }
      handleOk(values);
    })
  }
  return (
    <Modal visible={visible} title="高级筛选" onCancel={handleCancel} onOk={onOk}>
      <FormComponent ref={formRef} items={formItems} layout={formItemLayout}/>
    </Modal>
  )
}

export default SearchModalComponent
