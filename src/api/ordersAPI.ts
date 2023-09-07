import axios from "axios";
import {OrderType} from "../components/Order/reducers/orders-reducer";


//TODO currently deleteOrder is sending GET request
export const ordersAPI = {
    getOrders: () => {
        return axios.get<OrderType[]>("/Shipments.txt");
    },
    deleteOrder: () => {
        return axios.get<OrderType[]>("/Shipments.txt")
    }
}