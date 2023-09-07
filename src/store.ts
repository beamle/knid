import {AnyAction, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch} from 'redux-thunk';
import { applyMiddleware} from 'redux';
import { useDispatch } from "react-redux";
import {ordersReducer} from "./components/Order/reducers/orders-reducer";



const middleware = applyMiddleware(thunk);
const rootReducers = combineReducers({
    orders: ordersReducer

})

export const store = createStore(rootReducers, middleware)

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()


//types
export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

// @ts-ignore
window.store = store