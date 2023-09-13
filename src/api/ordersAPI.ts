import axios from "axios";
import {OrderType} from "../components/Order/reducers/orders-reducer";

const instance = axios.create({
    baseURL: 'url',
    withCredentials: true,
})
//could be used if we deal with server side API


//all requests are using get query since I didn't have access to api
export const ordersAPI = {
    getOrders: () => {
        return axios.get<OrderType[]>("/Shipments.txt");
    },
    deleteOrder: () => {
        return axios.get<OrderType[]>("/Shipments.txt")
    },
    updateOrder: (newOrder: OrderType) => {
        return axios.get<OrderType[]>("/Shipments.txt") // newOrder.orderId and newOrder should be added if we send put request
    }
}