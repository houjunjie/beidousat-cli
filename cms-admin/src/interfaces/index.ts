export interface IreduxAction {
  type: string,
  [propName: string]: any,
}

export interface IreduxSagaEffects {
  put: any,
  call: any,
  select: any,
}

export type IdvaModelReducer = (preState: object, action: IreduxAction) => object

export interface IdvaModelReducers {
  [reducerName: string]: IdvaModelReducer
}

export type IdvaModelEffectFn = (action: IreduxAction, sagaEffects: IreduxSagaEffects) => any

export interface IreduxSagaTaker {
  type: string,
  [propsName: string]: any
}
// problem
export interface IdvaModelEffectWithTaker extends Array<IreduxSagaTaker | IdvaModelEffectFn> {
  [index: number]: IreduxSagaTaker | IdvaModelEffectFn,
}

export type IdvaModelEffect = IdvaModelEffectFn | IdvaModelEffectWithTaker

export interface IdvaModelEffects {
  [effectName: string]: IdvaModelEffect
}

export interface IdvaModel<T> {
  namespace: string,
  state?: T,
  reducers?: IdvaModelReducers,
  effects?: IdvaModelEffects,
  subscriptions?: object
}