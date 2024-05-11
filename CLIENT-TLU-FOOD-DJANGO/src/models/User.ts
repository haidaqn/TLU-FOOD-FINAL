export interface User {
  id: number
  username: string
  email: string
  create_date: string
  modified_date: string
  status: boolean
  account_name: string
  img_user: string
  sdt: string
  role:string
}



export interface UpdatePassWord {
  current_password: string
  new_password: string
  confirm_password: string
}

export interface UpdateInformationUser {
  password: string
  newPassword: string | null
  accountName: string | null
  img: File | null
  sdt: string | null
}

export interface UserInfo {
  accountName: string
  email: string
  img: string
  sdt: string
  username: string
}

export interface InfoUserChange {
  email: string
  account_name: string
  sdt: string
  img_user: string
}