import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


function* ADD_TO_CART_Saga_Func(action: any){
    yield put({type: 'ADD_TO_CART_Reducer', payload: action.payload})
}

function* mySaga(){
    yield takeEvery('ADD_TO_CART_Action', ADD_TO_CART_Saga_Func)
}

export default mySaga;