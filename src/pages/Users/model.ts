import { Effect, Reducer, Subscription } from 'umi';
import { getTaleData, updateTable, deleteTable, addTable }  from './serviece';

export interface userModelType {
  namespace: string,
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getTable: Effect
    edit: Effect
    delete: Effect
    add: Effect
  },
  subscriptions: {
    setup: Subscription
  }
}
const userModel: userModelType = {
  namespace: 'users',
  state: {
    // 状态的初始值
  },
  reducers: {
    getList (state, { payload }) {
      return payload;
    }
    // action = > {type, payload}
    // getList (state, {type, payload}) {
      //   // return newState;
      // }
    },
  effects: {
    *getTable ({payload}, {put,  call}) {
      const data = yield call(getTaleData)
      yield put({
        type: 'getList',
        payload: data
      })
    },
    *edit ({payload: {id, value}}, {put, call}) {
      // 如果接口需要传递参数, 则需要以对象的形式放到第二个参数中, 
      const data = yield call(updateTable, {id, value})
      yield put({
        type: 'getTable',
      })
    },
    *delete ({payload: {id}}, {put,  call}) {
      const data = yield call(deleteTable, {id})
      yield put({
        type: 'getTable',
      })
    },
    *add ({payload: {value}}, {put,  call}) {
      const data = yield call(addTable, {value})
      yield put({
        type: 'getTable',
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      const { pathname } = history.location
      if(pathname === '/users') {
        dispatch({
          type: 'getTable'
        })
      }
    }
  }
}
export default userModel;
