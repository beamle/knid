import {Dispatch} from "redux";
import {ordersAPI} from "../../../api/ordersAPI";

const initialState = {
    orders: []
}

export const ordersReducer = (state: OrdersReducerStateType = initialState, action: ActionsType): OrdersReducerStateType => {
    switch (action.type) {
        case "orders/SET-ORDERS":
            return {...state, orders: [...action.orders]}
        case "orders/DELETE-ORDER":
            debugger
            return {...state, orders: state.orders.filter(order => order.orderNo !== action.orderNo)}
        default:
            return state
    }
}


//AC
export const setOrdersAC = (orders: OrderType[]) => ({type: "orders/SET-ORDERS", orders} as const)
export const deleteOrderAC = (orderNo: string) => ({type: "orders/DELETE-ORDER", orderNo} as const)

//TH
export const fetchOrdersTC = () => (dispatch: Dispatch<ActionsType>) => {
    ordersAPI.getOrders()
        .then(res => {
            dispatch(setOrdersAC(res.data))
        })
}

export const deleteOrderTC = (orderNo: string) => (dispatch: Dispatch<ActionsType>) => {
    ordersAPI.deleteOrder()
        .then(res => {
            if (res.status === 200) {
                dispatch(deleteOrderAC(orderNo))
            }
            else {
                
            }
        })
}

//types
type ActionsType =
    ReturnType<typeof setOrdersAC> | ReturnType<typeof deleteOrderAC>
type OrdersReducerStateType = {
    orders: OrderType[]
}
export type OrderType = {
    orderNo: string
    date: string
    customer: string
    trackingNo: string
    status: string
    consignee: string
}

