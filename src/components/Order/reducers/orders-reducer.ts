import {Dispatch} from "redux";
import {ordersAPI} from "../../../api/ordersAPI";

const initialState = {
    orders: []
}

export const ordersReducer = (state: OrdersReducerStateType = initialState, action: ActionsType): OrdersReducerStateType => {
    switch (action.type){
        case "orders/SET-ORDERS":
            return {...state, orders: [...action.orders]}
        default:
            return state
    }
}


//AC
export const setOrdersAC = (orders: Order[]) => ({type: "orders/SET-ORDERS", orders} as const)

//TH
export const fetchOrdersTC = () => (dispatch: Dispatch<ActionsType>) => {
    ordersAPI.getOrders()
        .then(res => {
            dispatch(setOrdersAC(res.data))
        })
}

//types
type ActionsType = ReturnType<typeof setOrdersAC>
type OrdersReducerStateType = {
    orders: Order[]
}
export type Order = {
    orderNo: string
    date: string
    customer: string
    trackingNo: string
    status: string
    consignee: string
}

