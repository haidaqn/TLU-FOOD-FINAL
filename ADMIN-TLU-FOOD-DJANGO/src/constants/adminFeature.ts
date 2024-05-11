function getList(labelList: string[], navList: string[]) {
  const list = labelList.map((item, index) => ({
    label: item,
    nav: "/admin" + navList[index],
  }))
  return list
}
export const OrderList = getList(
  // ["Báo giá", "Đơn hàng", "Nhân viên", "Khách hàng"],
  // ["/quote", "/order", "/employee", "/customer"],
  ["Khách hàng"],
  ["/customer"],
)
export const InvoiceList = getList(
  ["Đơn hàng", "Thống kê hóa đơn"],
  ["/invoice", "/invoice-stat"],
)
export const ProductList = getList(
  ["Sản phẩm", "Loại sản phẩm", "Nhà cung cấp"],
  ["/product", "/type", "/supplier"],
)
export const ConfigList = getList(["Ưu đãi"], [ "/voucher"])