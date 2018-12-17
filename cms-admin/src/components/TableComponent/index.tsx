import * as React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import {setDefaultData} from '@/utils/utils';

const TableComponent: React.SFC<TableProps<any>> = (props) => {

  props.columns && props.columns.map((item: any) => {
    if(!item.render) {
      item.render = (d: string) => <span>{setDefaultData(d)}</span>
    }
  })
  return (
    <Table {...props}/>
  )
}

export default TableComponent
