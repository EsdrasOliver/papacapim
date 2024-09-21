import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import Login from "@/app"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext)

    if(!auth.user) return <Login />

    return children
}