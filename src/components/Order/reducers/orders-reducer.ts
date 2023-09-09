import {Dispatch} from "redux";
import {ordersAPI} from "../../../api/ordersAPI";
import {SetAppErrorType, SetAppStatusType, setErrorAC, setStatusAC} from "../../../app/reducers/app-reducer";
import {AxiosError} from "axios";

const initialState = {
    orders: [],
    orderToUpdate: null
}

export const ordersReducer = (state: OrdersReducerStateType = initialState, action: ActionsType): OrdersReducerStateType => {
    switch (action.type) {
        case "orders/SET-ORDERS":
            return {...state, orders: [...action.orders]}
        case "orders/DELETE-ORDER":
            return {...state, orders: state.orders.filter(order => order.orderNo !== action.orderNo)}
        case "orders/SET-ORDER-TO-UPDATE":
            return {...state, orderToUpdate: {...action.orderToUpdate}}
        case "orders/UPDATE-ORDER":
            return {
                ...state,
                orders: state.orders.map(order => order.orderNo === action.newOrder.orderNo ? {...order, ...action.newOrder} : order)
            }
        default:
            return state
    }
}


//AC
export const setOrdersAC = (orders: OrderType[]) => ({type: "orders/SET-ORDERS", orders} as const)
export const deleteOrderAC = (orderNo: string) => ({type: "orders/DELETE-ORDER", orderNo} as const)
export const setOrderToUpdateAC = (orderToUpdate: OrderType) => ({type: "orders/SET-ORDER-TO-UPDATE", orderToUpdate} as const)
export const updateOrderAC = (newOrder: OrderType) => ({type: "orders/UPDATE-ORDER", newOrder} as const)

//TH
export const fetchOrdersTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    ordersAPI.getOrders()
        .then(res => {
            if (res.status === 200) {
                dispatch(setOrdersAC(res.data))
                dispatch(setStatusAC('idle'))
            } else {
                dispatch(setErrorAC("Some server error!"))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setErrorAC(err.message))
        })
}

export const deleteOrderTC = (orderNo: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    ordersAPI.deleteOrder()
        .then(res => {
            if (res.status === 200) {
                dispatch(deleteOrderAC(orderNo))
                dispatch(setStatusAC('idle'))
            } else {
                dispatch(setErrorAC("Some server error!"))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setErrorAC(err.message))
        })
}


export const updateOrderTC = (newOrder: OrderType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC('loading'))
    ordersAPI.updateOrder(newOrder)
        .then(res => {
            if (res.status === 200) {
                dispatch(updateOrderAC(newOrder))
                dispatch(setStatusAC('idle'))
            } else {
                dispatch(setErrorAC("Some server error!"))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setErrorAC(err.message))
        })
}

//types
type ActionsType =
    ReturnType<typeof setOrdersAC> |
    ReturnType<typeof deleteOrderAC> |
    ReturnType<typeof setOrderToUpdateAC> |
    ReturnType<typeof updateOrderAC> |
    SetAppStatusType | SetAppErrorType

type OrdersReducerStateType = {
    orders: OrderType[]
    orderToUpdate: OrderType | null
}
export type OrderType = {
    orderNo: string
    date: string
    customer: string
    trackingNo: string
    status: string
    consignee: string
}

