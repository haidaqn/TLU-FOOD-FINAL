import axiosClient from "./axiosClient"

class apiDashboard {
  getDate30ago() {
    const url = "/payment/dashboard-order-bill"
    return axiosClient.get(url)
    }
    getFoodBestSeller() {
        const url = "/prod/dashboard-order-bill"
        return axiosClient.get(url)
    }
    getCustomerBestSeller() {
        const url = "/prod/dashboard-user-bill"
        return axiosClient.get(url)
    }
    getTotalUser() {
        const url = "/payment/totalUser"
        return axiosClient.get(url)
    }
    getTotalOrder() {
        const url = "/payment/totalOrder"
        return axiosClient.get(url)
    }
    getTotalMoney() {
        const url = "/payment/totalMoney"
        return axiosClient.get(url)
    }
    getOrderInDay() {
        const url = "/payment/order-in-day"
        return axiosClient.get(url)
    }
    getTotalFood() {
        const url = "/payment/totalFood"
        return axiosClient.get(url)
    }
}
export default apiDashboard
