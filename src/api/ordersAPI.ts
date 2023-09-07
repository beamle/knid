import axios from "axios";

const settings = {
    withCredentials: true
}

export const ordersAPI = {
    getOrders: () => {
        const url = "/Shipments.txt";
        console.log("Request URL:", url); // Log the URL to the console
        return axios.get(url, settings);
    }
}