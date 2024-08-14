import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";
import { useEffect, useState } from "react";

export default function BasketSummary() {
    const {basket} = useStoreContext();
    const [subtotal, setSubtotal] = useState(0);
    const deliveryFee = 5;

useEffect(() => {
        if (basket?.items) {
            const newSubTotal = Number(
                basket.items.reduce((sum, item) => sum + item.price / 100 * item.quantity, 0).toFixed(2)
            );
            setSubtotal(newSubTotal);
        }
    }, [basket]);

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">${subtotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">{subtotal > 100 ? (
                            <span style={{ textDecoration: 'line-through' }}>${deliveryFee}</span>
                            ) : (
                            `$${deliveryFee}`
                            )}
                        </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">
                                {subtotal > 100 ? `$${subtotal}` : `$${subtotal + deliveryFee}`}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}