import { formatCurrency } from "../helpers"
import { useAppSelector } from "../redux/hooks/useAppSelector"
import {Link} from "react-router-dom"
import Box from "@mui/material/Box";

export const FinalizePayment = () => {
    const totalAmount = useAppSelector((state) => state.product.totalValue)
    const user = useAppSelector((state) => state.user)
    return (
        <>
            <Box component={"div"} sx={{width: "100%", height: "100vh", background: "#eceff1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h1>{user.name}</h1>
                <h1>Pagamento Finalizado: {formatCurrency(totalAmount)}</h1>
                <Link to="/">Retornar</Link>
            </Box>
        </>
    )
}