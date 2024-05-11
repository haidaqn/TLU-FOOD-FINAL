import { RegisterForm, RegisterFormApi } from "../models/RegisterForm"
import { LoginForm } from "../models/LoginForm"
import axiosClient from "./axiosClient"

const authApi = {
  login(data: LoginForm) {
    const url = "auth/login"
    return axiosClient.post(url, data)
  },
  register(data: RegisterForm) {
    const url = "auth/register"
    const form: RegisterFormApi = {
      account_name: data.name,
      password: data.password,
      re_password: data.rePassword,
      username: data.username,
      sdt: data.phoneNumber,
    }
    return axiosClient.post(url, form)
  },
  hello() {
    const url = "auth/hello"
    return axiosClient.get(url)
  },
}
export default authApi
