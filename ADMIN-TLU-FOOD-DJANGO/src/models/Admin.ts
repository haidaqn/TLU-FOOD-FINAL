import { Role, User } from "."

export interface searchRoot {
  id: number
  nameType?: string
  restaurantName?: string
  distance?: number
  star?: number
}

export interface ProductRoot {
  totalRow: number
  data: ProductItem[]
}
export interface VoucherRoot {
  totalRow: number
  data: VoucherItem[]
}
export interface EmployeeRoot {
  totalRow: number
  data: EmployeeItem[]
}

export interface RestaurantRoot {
  totalRow: number
  data: TypeRestaurant[]
}

export interface ProductItem {
  id: number
  foodName: string
  price: number
  detail: string
  nameRestaurantFood: string
  imgFood: string
  createBy: string
  createAt: string
  quantityPurchased: any
  typeFoodEntityId: number
  restaurantEntityId: number
  status: boolean
  distance: string
  toppingList: any[]
  nameType: string
}

export interface TypeRoot {
  data: TypeItem[]
  totalRow: number
}
export interface TypeItem {
  id: number
  nameType: string
  imgType: string
  status: boolean
}

export interface TypeRestaurant {
  id: number
  restaurantName: string
  quantitySold: number
  timeStart: string
  timeClose: string
  distance: number
  imgRes: string
  time: any
  detail: string
  star: number
  phoneNumber: string
}
export interface EmployeeItem {
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
}
export interface VoucherItem {
  id?: number
  createDate?: string
  createAt?: string
  status?: boolean
  discount: number
  expired: string
  detail: string
  code: string
  quantity: number
  title: string
}
export interface RoleUser {
  id: number
  createDate: any
  status: any
  authority: string
}

export interface UserItem {
  id: number
  role: RoleUser[]
  token: any
  sdt: string
  accountName: string
  imgUser: string
  msv: string
}

export interface UserRoot {
  totalRow: number
  data: EmployeeItem[]
}

export interface InvoiceRoot {
  totalRow: number
  data: BillUser[]
}

export interface FoodResponseBill {
  foodId: number
  nameFood: string
  priceFood: number
  quantity: number
  nameRes: string
  resId: number
  address?:string
  itemList: ItemTopping[]
}

export interface ItemTopping {
  name: string
  price: number
}
export interface VoucherResponseBill {
  code: string
  discount: number
  expired: string
  createDate: string
}
export interface BillUser {
  id: number
  accountName:string
  createAt: string
  orderStatus: string
  ship_fee: number
  finish_time: string
  user?:User
  accountId: number
  total_amount: number
  note: string
  voucherResponseBill: VoucherResponseBill | any
  foodResponseBills: FoodResponseBill[]
}

export interface RootBillUser {
  totalRow: number
  data: BillUser[]
}
