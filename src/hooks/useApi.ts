import { useContext } from "react"
import { ApiContext } from "../contexts/apiContext"

export const useApi = () => {
    const context = useContext(ApiContext)

    if (!context) {
        throw new Error('useApi only can be used inside ApiContext!')
    }

    return context.api
}
