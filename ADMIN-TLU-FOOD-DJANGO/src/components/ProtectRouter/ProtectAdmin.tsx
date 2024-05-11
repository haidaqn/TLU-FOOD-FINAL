import { useInforUser } from "@/hooks"

import { Navigate, Outlet } from "react-router-dom"

export function ProtectAdmin() {
  const user=useInforUser()
  return user?.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  )
}
