import { getLocalStorage } from './utils';

/**
 * {
 *  id
 *  mpid: 在哪个菜单栏显示 不显示为-1
 *  bpid: 关联父级菜单
 * }
 */

console.log(getLocalStorage('storeMenu'));
const database: any = [
  {
    id: 8,
    name: '店家管理',
    route: '',
    bpid: 0,
    mpid: 0,
    authority: ['create', 'delete', 'edit', 'view'],
    level: 0,
    order: 0,
  },
  {
    id: 9,
    name: '店家列表',
    route: '/store/store',
    bpid: 8,
    mpid: 8,
    authority: ['create', 'delete', 'edit', 'view'],
    level: 0,
    order: 0,
  },
];
// console.log(database)
export default database;
// export default getLocalStorage('storeMenu').lists;
