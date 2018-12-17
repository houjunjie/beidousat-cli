import { Location } from 'history'
export interface Ipage {
  current: number,
  pageSize: number,
  showQuickJumper: boolean,
  showSizeChanger: boolean,
  showTotal: any,
  total: number
}

export interface Iloading {
  effects?: any,
  global?: boolean,
  models?: any
}
export interface Ipagination {
  showSizeChanger: boolean,
  showQuickJumper: boolean,
  showTotal: any,
  current: number,
  total: number,
  pageSize: number
}

export interface IBaseProps {
  loading: Iloading,
  dispatch: any,
  location: Location
}

export interface ICommonState {
  list: any[],
  pagination: Ipagination,
  searchValue: string,
}