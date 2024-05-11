import { VoucherItem } from "./../models/Admin"
import { ExpandFood } from "./../models/Topping"
import { PageConfig } from "./../models/Config"
import axiosClient from "./axiosClient"
import axios from "axios"
const adminApi = {
  //done
  getAllProducts(page: PageConfig) {
    const url = `prod/paging-food?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getAllTypeFoods(page: PageConfig) {
    const url = `prod/paging-type-food?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getAllResFoods(page: PageConfig) {
    const url = `prod/paging-res?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },
  getPagingUser(page: PageConfig) {
    const url = `auth/paging-account?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },

  search(param: string | null, apiHandle: string) {
    const url_res = `prod/${apiHandle}?pageIndex=1&pageSize=100`
    return axiosClient.get(url_res)
  },

  getUploadImages(images: FormData) {
    const url = `https://api.cloudinary.com/v1_1/drussspqf/image/upload`
    return axios.post(url, images)
  },

  addFood(
    name: string,
    price: number,
    detail: string,
    imgFood: string,
    typeFoodEntityId: number,
    restaurantEntityId: number,
    nameRestaurantFood: string,
    nameType: string,
    star: number,
    distance: number,
  ) {
    const data = new FormData()
    data.append("createBy", "ADMIN")
    data.append("createAt", new Date().toISOString())
    data.append("detail", detail)
    data.append("foodName", name)
    data.append("imgFood", imgFood)
    data.append("price", price.toString())
    data.append("typeFoodEntityId", typeFoodEntityId.toString())
    data.append("restaurantEntityId ", restaurantEntityId.toString())
    data.append("nameRestaurantFood ", nameRestaurantFood.toString())
    data.append("nameType ", nameType.toString())
    data.append("star ", star.toString())
    data.append("distance ", distance.toString())

    const url = "prod/paging-food"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  deleteFood(foodArray: Array<number>) {
    const url = "prod/paging-food"
    return axiosClient.delete(url, { data: foodArray })
  },

  updateProduct(
    id: number,
    name: string,
    price: number,
    detail: string,
    imgFood: string,
    typeFoodEntityId: number,
    restaurantEntityId: number,
    nameRestaurantFood: string,
    nameType: string,
    star: number,
    distance: number,
  ) {
    const data = new FormData()
    data.append("createBy", "ADMIN")
    data.append("createAt", new Date().toISOString())
    data.append("detail", detail)
    data.append("foodName", name)
    data.append("price", price.toString())
    data.append("typeFoodEntityId", typeFoodEntityId.toString())
    data.append("restaurantEntityId ", restaurantEntityId.toString())
    data.append("nameRestaurantFood ", nameRestaurantFood.toString())
    data.append("nameType ", nameType.toString())
    data.append("star ", star.toString())
    data.append("distance ", distance.toString())
    data.append("imgFood", imgFood)
    data.append("typeFoodEntityId", String(typeFoodEntityId))
    data.append("restaurantEntityId", String(restaurantEntityId))
    const url = `prod/paging-food/${id}/`
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },

  addType(imgType: string, nameType: string) {
    const data = new FormData()
    data.append("imgType", imgType)
    data.append("nameType", nameType)
    data.append("create_date", new Date().toISOString())
    const url = "prod/paging-type-food"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },

  updateType(id: number, nameType: string, imgRes: string) {
    const data = new FormData()
    data.append("id", String(id))
    data.append("nameType", nameType)
    data.append("imgType", imgRes)
    const url = `prod/paging-type-food/${id}/`
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  deleteType(typeArray: Array<number>) {
    const url = "prod/paging-type-food"
    return axiosClient.delete(url, { data: typeArray })
  },

  addRestaurant(
    restaurantName: string,
    address: string,
    distance: string,
    detail: string,
    phoneNumber: string,
    supOpen: string,
    supClose: string,
    imgRes: string,
  ) {
    const data = new FormData()
    data.append("restaurantName", restaurantName)
    data.append("address", address)
    data.append("distance", distance)
    data.append("detail", detail)
    data.append("phoneNumber", phoneNumber)
    data.append("timeStart", supOpen)
    data.append("timeClose", supClose)
    data.append("imgRes", imgRes)
    data.append("quantitySold", "0")
    data.append("star", "5")
    const url = "prod/paging-res"
    return axiosClient.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data", // Thêm đoạn này để đảm bảo dữ liệu được gửi dưới dạng FormData
      },
    })
  },
  updateSupplier(
    id: number,
    restaurantName: string,
    address: string,
    distance: string,
    detail: string,
    timeStart: string,
    timeClose: string,
    phoneNumber: string,
    imgRes: string | null,
  ) {
    const data = new FormData()
    data.append("id", String(id))
    data.append("restaurantName", restaurantName)
    data.append("address", address)
    data.append("distance", String(distance))
    data.append("detail", detail)
    data.append("timeStart", timeStart)
    data.append("timeClose", timeClose)
    data.append("phoneNumber", phoneNumber)
    data.append("phoneNumber", phoneNumber)
    data.append("quantitySold", "0")
    data.append("star", "0")
    if (imgRes !== null) {
      data.append("imgRes", imgRes)
    }
    const url = `prod/paging-res/${id}/`
    return axiosClient.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  deleteStore(storeArray: Array<number>) {
    const url = "prod/paging-res"
    return axiosClient.delete(url, { data: storeArray })
  },
  getDetailStore(id: number) {
    const url = `prod/paging-res/${id}/`
    return axiosClient.get(url)
  },
  getAllVoucher(page: PageConfig) {
    const url = `auth/paging-voucher?pageSize=${page.pageSize}&pageIndex=${
      page.pageIndex + 1
    }`
    return axiosClient.get(url)
  },

  getDetailVoucher(id: number) {
    const url = `auth/paging-voucher/${id}/`
    return axiosClient.get(url)
  },
  addVoucher(data: VoucherItem) {
    const url = "auth/paging-voucher"
    return axiosClient.post(url, data)
  },
  deleteVoucher(foodArray: Array<number>) {
    const url = "auth/paging-voucher"
    return axiosClient.delete(url, { data: foodArray })
  },
  updateVoucher(data: VoucherItem) {
    const url = `auth/paging-voucher/${data.id}/`
    return axiosClient.put(url, data)
  },

  // đang làm

  // chưa done

  addTopping(data: ExpandFood) {
    const url = "ADMIN/add-topping"
    return axiosClient.post(url, data)
  },

  addEmployee(
    username: string,
    password: string,
    sdt: string,
    accountName: string,
    imgUser: File,
  ) {
    const url = "ADMIN/MANAGER/add-employee"
    return axiosClient.post(url, {
      username: accountName,
      password: password,
      sdt: sdt,
      accountName: username,
      imgUser: imgUser,
    })
  },

  updateBill(status: string, id: number) {
    const url = `payment/detail-bill/${id}?orderStatus=${status}`
    return axiosClient.patch(url)
  },

  getPagingEmployee(page: PageConfig) {
    const url = `ADMIN/MANAGER/paging-employee?pageSize=${page.pageSize}&pageIndex=${page.pageIndex}`
    return axiosClient.post(url)
  },

  getDetailBill(id: number) {
    const url = `payment/detail-bill/${id}`
    return axiosClient.get(url)
  },
  getBill(page: PageConfig, status: string | null) {
    if (status) {
      const url = `payment/bill?pageIndex=${page.pageIndex+1}&pageSize=${page.pageSize}&orderStatus=${status}`
      return axiosClient.get(url)
    }
    const url = `payment/bill?pageIndex=${page.pageIndex+1}&pageSize=${page.pageSize}`
    return axiosClient.get(url)
  },
}

export default adminApi
