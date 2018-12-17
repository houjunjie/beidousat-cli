// const APIV1 = '/mock/5abc414d251bae795f33517a/example'
const APIV1 = '/v4.0'

export default {
  name: '店家系统',
  prefix: 'storeAdmin',
  footerText: '店家系统后台',
  logo: '/logo_w.png',
  CORS: [],
  openPages: ['/login', '/platform'],
  apiPrefix: APIV1,
  APIV1,
  sorterConfig: {'descend': 'desc',"ascend": "asc"},
  // 店家类型
  store_type: {
    1: '量贩式',
    2: '夜总会'
  },
  // 地理位置
  storePosition: {
    1: '城区',
    2: '郊区'
  },
  // 网络连接通畅水平
  connLevel: {
    1: '优',
    2: '中',
    3: '差',
  },
  // 店家档次
  storeLevel: {
    1: '低档',
    2: '中档',
    3: '高档',
  },
  // 授权状态
  authStatus: {
    0: '未授权',
    1: '授权通过',
    2: '拒绝授权',
  },
  statusMap:{
    0: 'default',
    1: 'success',
    2: 'error'
  },
  // 店家状态
  storeStatus: {
    0:'已开户',
    1:'已审核',
    2:'待收设备',
    3:'待施工',
    4:'待验收',
    5:'试运营',
    6:'运营中',
    7:'停业',
    8:'欠费停业',
    9:'结业',
  },
  // 设备类型
  deviceType:['', '机顶盒','副屏','门头屏', '墙控面板','大堂横屏', '大堂竖屏'],
  deviceName : {
    'server_num': '服务器',
    'box_num': '机顶盒',
    'minor_screen_num': '副屏',
    'disk_num': '硬盘',
    'touch_screen_num': '触摸屏',
    'display_screen_num': '显示屏',
    'route_num': '路由',
    'switch_num': '交换机',
    'door_screen_num': '门屏',
    'wall_control_num': '墙控',
    'hall_screen_horizontal_num': '大厅横屏',
    'hall_screen_vertical_num': '大厅竖屏',
    'satellite_num': '卫星天线',
    'control_box_num': '中控盒'
  },
  // 设备类别
  // device_class: {
  //   1: '晨芯',
  //   2: '音诺恒',
  //   3: '华录',
  // },
  // manufacturer_list: [],
  device_type: {
    1: '机顶盒',
    2: '副屏',
    3: '门口屏',
    4: '墙控面版',
    5: '触摸屏',
    6: '播歌屏',
    7: '交换机',
    8: '路由器',
    9: '服务器',
    10: '大厅屏（横）',
    11: '大厅屏（竖）',
    12: '硬盘',
    13: '卫星天线',
    14: '中控盒',
  },
  deviceUseStatus: {
    0: '删除',
    1: '待审核',
    2: '审核不通过',
    3: '使用中',
    4: '维修中',
    5: '已修复',
    6: '更换中',
    7: '已报废',
    8: '禁用',
    9: '已回收',
    10: '黑名单',
  },
  // 设备状态
  // deviceStatus: ['删除','待审核','审核不通过','使用中','维修中','已修复','更换中','已报废','禁用','已回收','黑名单'],
  deviceStatus: {
    1: '在库',
    2: '在用',
    3: '故障',
    4: '其他',
  },
  api: {
    // 上传
    // uploadMaterial: `${APIV1}/base/material`,
    uploadMaterial: '/zuul/v4.0/base/material',
    // 店家管理
    store: `${APIV1}/store/backstage/store`,
    storeDetail: `${APIV1}/store/backstage/store/:id`,
    storeLog: `${APIV1}/store/backstage/store/log/:id`,
    storeDevList: `${APIV1}/store/backstage/store/device`,
    newStore: `${APIV1}/store/backstage/new/store`,
    newChkFirst: `${APIV1}/store/backstage/first/chk/new/store`,
    newChkSecond: `${APIV1}/store/backstage/second/chk/new/store`,
    changeStore: `${APIV1}/store/backstage/change/store`,
    changeStoreDeatil: `${APIV1}/store/backstage/change/store/:id`,
    changeChkFirst: `${APIV1}/store/backstage/first/change/store/:id`,
    changeChkSecond: `${APIV1}/store/backstage/second/change/store/:id`,
    updateStorePassword: `${APIV1}/store/change/backstage/store/password`,
    editInfo: `${APIV1}/store/backstage/edit/other/info`,
    storeAuth: `${APIV1}/store/auth/store`,
    storeChangeAgency: `${APIV1}/store/backstage/change/agent`,

    // 设备管理
    warehouse: `${APIV1}/store/warehouse`,
    device: `${APIV1}/store/device`,
    deviceDetail: `${APIV1}/store/device/:id`,
    deviceQrcode: `${APIV1}/store/qrcode/url`,
    newdevice: `${APIV1}/store/new/device`,
    olddevice: `${APIV1}/store/old/device`,
    // superAdmin: `${APIV1}/store/adminlist/warehouse`,
    // userAdmin: `${APIV1}/store/userlist/warehouse`,
    shipmentStore: `${APIV1}/store/shipment/info/store`,
    shipmentWarehouse: `${APIV1}/store/shipment/info/warehouse`,
    shipmentReserve: `${APIV1}/store/shipment/info/reserve`,
    shipment: `${APIV1}/store/shipment`, // 出货
    stock: `${APIV1}/store/stock`, // 进货
    warehouseStock: `${APIV1}/store/manufacturer/reserve/warehouse`, // 库存
    shipmentLog: `${APIV1}/store/shipment/device`, // 出货记录
    stockLog: `${APIV1}/store/stock/device`, // 进货记录
    resetDevice: `${APIV1}/store/reset/device/:id`, // 重置设备
    setFaultDevice: `${APIV1}/store/set/fault/device/:id`, // 设为故障
    recoverDevice: `${APIV1}/store/recover/device/:id`, // 恢复设备
    updateDescDevice: `${APIV1}/store/desc/device/:id`, // 更改备注
    warehouseDetail: `${APIV1}/store/warehouse/:id`, // 仓库详情
    shipmentAuth: `${APIV1}/store/shipment/auth`, // 授权出货
    manufacturerList: `${APIV1}/store/manufacturer/for/select`, // 设备厂家


    // 代理管理
    agentList: `${APIV1}/store/agent`,
    getLevelAgent: `${APIV1}/store/level/user/agent`,
    allAgent: `${APIV1}/store/all/agent`,
    allAuthAgent: `${APIV1}/store/all/auth/agent`,
    // 添加时候的代理列表，上级代理
    addingAgentList: `${APIV1}/store/adding/agent`,
    areaAgent: `${APIV1}/store/area/agent`,
    addFirstAgent: `${APIV1}/store/first/agent`,
    addSecondAgent: `${APIV1}/store/second/agent`,
    editAgent: `${APIV1}/store/agent/:id`,
    frozenAgent: `${APIV1}/store/frozen/agent/:id`,
    delAgent: `${APIV1}/store/agent/:id`,

    // 权限管理
    roleList: `${APIV1}/store/role`,
    roleResource: `${APIV1}/store/rbac/user/role/resource`,
    role: `${APIV1}/store/role/:id`,
    storeUserList: `${APIV1}/store/user`,
    storeUser: `${APIV1}/store/user/:id`,
    menu: `${APIV1}/store/menu`,
    menuResource: `${APIV1}/store/relative/menu/resource`,
    editMenu: `${APIV1}/store/menu/:id`,
    resource: `${APIV1}/store/resource`,
    updateResource: `${APIV1}/store/resource/:id`,
    category: `${APIV1}/store/category/resource`,
    // 权限设置
    permitResource: `${APIV1}/store/permit/resource`,

    // 账户信息
    userInfo: `${APIV1}/store/user/info`,
    updatePassword: `${APIV1}/store/user/password`,
    // 中控码
    controlbox: `${APIV1}/store/control-box-brand`,
    editControlbox: `${APIV1}/store/control-box-brand/:id`,
  },
}
