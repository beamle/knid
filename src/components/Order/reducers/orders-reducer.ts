import {Dispatch} from "redux";
import {ordersAPI} from "../../../api/ordersAPI";

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
        default:
            return state
    }
}


//AC
export const setOrdersAC = (orders: OrderType[]) => ({type: "orders/SET-ORDERS", orders} as const)
export const deleteOrderAC = (orderNo: string) => ({type: "orders/DELETE-ORDER", orderNo} as const)
export const setOrderToUpdateAC = (orderToUpdate: OrderType) => ({type: "orders/SET-ORDER-TO-UPDATE", orderToUpdate} as const)

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
    ReturnType<typeof setOrdersAC> | ReturnType<typeof deleteOrderAC> | ReturnType<typeof setOrderToUpdateAC>
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

