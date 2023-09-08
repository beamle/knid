import axios from "axios";
import {OrderType} from "../components/Order/reducers/orders-reducer";


//all requests are using get query since I work with txt file.
export const ordersAPI = {
    getOrders: () => {
        return axios.get<OrderType[]>("/Shipments.txt");
    },
    deleteOrder: () => {
        return axios.get<OrderType[]>("/Shipments.txt")
    }
}