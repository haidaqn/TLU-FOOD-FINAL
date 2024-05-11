import apiDashboard from "@/api/apiDashboard"
import { useWindowDimensions } from "@/hooks"
import { BarChart } from "@mui/x-charts"
import { useEffect, useState } from "react"

import { CustomerBestSeller, Date30ago, FoodBestSeller } from "@/models"
import { handlePrice } from "@/utils"
import { Box, Grid } from "@mui/material"

export const Dashboard = () => {

  const [dataDate, setDate] = useState<Date30ago>()
  const [dataFood, setFood] = useState<FoodBestSeller[]>([])
  const [dataOrderInDay, setOrderInDay] = useState<Date30ago>()
  const [dataCustomer, setCustomer] = useState<CustomerBestSeller>()
  const [dataTotalUser, setTotalUser] = useState<number>()
  const [dataTotalOrder, setTotalOrder] = useState<number>()
  const [dataTotalMoney, setTotalMoney] = useState<number>()
  const [totalFood, setTotalFood] = useState<number>()
  const [check, setCheck] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = new apiDashboard()
        await Promise.all([
          api.getDate30ago(),
          api.getCustomerBestSeller(),
          api.getOrderInDay(),
          api.getFoodBestSeller(),
          api.getTotalUser(),
          api.getTotalOrder(),
          api.getTotalMoney(),
          api.getTotalFood(),
        ])
          .then((values) => {
            setDate(values[0] as unknown as Date30ago)
            setCustomer(values[1] as unknown as CustomerBestSeller)
            setOrderInDay(values[2] as unknown as Date30ago)
            setFood(values[3] as unknown as FoodBestSeller[])
            setTotalUser(values[4] as unknown as number)
            setTotalOrder(values[5] as unknown as number)
            setTotalMoney(values[6]?.total_amount__sum as unknown as number)
            setTotalFood(values[7] as unknown as number)
          })
          .catch((error) => {
            console.error("Error fetching data:", error)
          })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  if (
    !(
      dataDate &&
      dataFood &&
      dataCustomer &&
      dataOrderInDay &&
      dataTotalMoney &&
      dataTotalOrder &&
      dataTotalUser
    )
  )
    return "Loading..."

  return (
    <div className="w-full h-full flex flex-col items-center gap-5  px-3 pt-1 bg-gray-100">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <div className="px-3 py-2 border rounded-md bg-white w-[33%]">
          Tổng số tiền bán được là : {handlePrice(dataTotalMoney)} VND
        </div>
        <div className="px-3 py-2 border rounded-md bg-white w-[33%]">
          Tổng số đơn hàng là : {dataTotalOrder}
        </div>
        <div className="px-3 py-2 border rounded-md bg-white w-[33%]">
          Tổng số người dùng là : {dataTotalUser}
        </div>
        <div className="px-3 py-2 border rounded-md bg-white w-[33%]">
          Tổng số món ăn đang được bán là : {totalFood}
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "20px",
        }}
      >
        <div className="flex-3 border justify-center items-center px-5 bg-white">
          <div className="mb-4 flex gap-3 mt-2">
            <span
              onClick={() => setCheck(true)}
              className={`${
                check && "bg-gray-300"
              } px-3 py-1 border rounded-md hover:opacity-80 cursor-pointer`}
            >
              Thống kê theo ngày
            </span>
            <span
              onClick={() => setCheck(false)}
              className={`${
                !check && "bg-gray-300"
              } px-3 py-1 border rounded-md hover:opacity-80 cursor-pointer`}
            >
              Thống kê theo người dùng
            </span>
          </div>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: !check ? dataCustomer.name : dataOrderInDay?.date,
              },
            ]}
            series={[
              { data: !check ? dataCustomer.value : dataOrderInDay?.value },
            ]}
            height={550}
            margin={{ top: 10, bottom: 30, left: 60, right: 50 }}
          />
        </div>
        <div className="w-[23%] flex items-center justify-center flex-col gap-3 bg-white">
          <span className="text-lg font-bold">TOP SALES FOOD</span>
          {dataFood && (
            <Grid container spacing={4}>
              {dataFood.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <div className="flex flex-col items-center border rounded-md pt-2">
                    <span className="text-lg font-bold">{item.label}</span>
                    <img src={item.img} alt="" className="w-full" />
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </Box>
    </div>
  )
}
