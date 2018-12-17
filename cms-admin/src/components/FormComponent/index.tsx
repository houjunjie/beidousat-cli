import React from 'react';
import { Form, Input, Tooltip, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const FormItem = Form.Item
export interface Ilayout {
  labelCol: any,
  wrapperCol: any
}
// 默认的layout
// export const defaultLabelColSpan = 6
const defaultFormItemLayout: Ilayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
}
interface IRules {
  required?: boolean,
  pattern?: any,
  message?: string,
  [props:string]: any
}
export interface IItem {
  label: string,
  key: string,
  component?: any,
  rules?: IRules[],
  required?: boolean,
  options?: {
    initialValue?: any
    [props:string]: any
  }
}
export interface IFormItem {
  item: IItem,
  layout?: Ilayout,
  getFieldDecorator?: any,
  styles?: any,
  tooltip?: any
}
// 渲染单个表单项
export const RenderFormItem = ({ item, styles = '', layout = defaultFormItemLayout, getFieldDecorator, tooltip }: IFormItem) => {
  const { label, key, required, component, options = {}, rules } = item;
  const l = tooltip ? <span>{label}&nbsp;<Tooltip
    title={tooltip}
  >
    <Icon type="info-circle-o" />
  </Tooltip></span> : label;

  rules ? rules[0] = {...{ required, message: `${label}为空` },...rules[0]} : false
  return (
    <FormItem key={key} className={styles} label={l} {...layout}>
      {getFieldDecorator ? getFieldDecorator(key, {
        ...options,
        rules: rules || [{ required, message: `${label}为空` }],
      })(component || <Input placeholder={`请输入${label}`} />) : component}
    </FormItem>
  )
}

/**
 * items = [{
      label: '密码输入框',
      key: 'password',
      component: <Input type="password" />,
      rules: [
        {
          required: true,
          pattern: /^[0-9a-zA-Z]{8,16}$/,
          message: '密码长度为8-16位，只能包含数字和英文',
        },
      ],
    }]
 */
interface Iprops extends FormComponentProps {
  items: IItem[],
  layout?: Ilayout,
}
class FormModal extends React.Component<Iprops> {
  render() {
    // items格式即为上文配置的表单项
    const { items, layout = defaultFormItemLayout, form: { getFieldDecorator } } = this.props
    return (
      <Form>
        {items.map((item: any) => RenderFormItem({ item, layout, getFieldDecorator }))}
      </Form>
    )
  }
}

export default Form.create()(FormModal)
