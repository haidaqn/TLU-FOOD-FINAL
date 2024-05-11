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
  role: string
  token:string
}

export interface Role {
  id: number
  createDate: any
  status: any
  authority: string
}
