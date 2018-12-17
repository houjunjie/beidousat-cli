import * as React from 'react';
import { Tag } from 'antd';

interface Iprops {
  tagList: {
    label: string,
    key: string
  }[],
  handleClone: <T>(payload: T) => void
}
const TagComponent:React.SFC<Iprops> =({tagList, handleClone}) => {
  return <div>
    {
      tagList.map((item, index) => <Tag key={index} closable onClose={() => handleClone(item.key)}>{item.label}</Tag>)
    }
  </div>
}

export default TagComponent
