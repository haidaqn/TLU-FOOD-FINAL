import axiosClient from "./axiosClient"
import { PageConfig } from "@/models"

const foodsApis = {
  getDetailFood(id: number) {
    const url = `prod/paging-food/${id}`
    return axiosClient.get(url)
  },

  getDetailType(id: number) {
    const url = `prod/paging-type-food/${id}`
    return axiosClient.get(url)
  },

  // chưa done

  getRecommendFoods() {
    const url = "auth/get-recommend-food"
    return axiosClient.get(url)
  },
  getTypeFoods() {
    const url = "auth/get-all-type"
    return axiosClient.get(url)
  },
  getRecommendRestaurants() {
    const url = "auth/get-recommend-res"
    return axiosClient.get(url)
  },
  getDetailStore(id: number) {
    const url = `auth/get-detail-res?id=${id}`
    return axiosClient.post(url)
  },

  searchFoods(search: string) {
    const url = `auth/search-food?searchString=${search}`
    return axiosClient.post(url)
  },
  pagingFood(page: PageConfig) {
    const url = `auth/paging-food-admin?pageSize=${page.pageSize}&pageIndex=${page.pageIndex}`
    return axiosClient.post(url)
  },
  pagingRes(page: PageConfig) {
    const url = `auth/paging-res?pageSize=${page.pageSize}&pageIndex=${page.pageIndex}`
    return axiosClient.post(url)
  },
}

export default foodsApis
