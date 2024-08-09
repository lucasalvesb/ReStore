import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";
import agent from "../../app/api/agent";

export default function BasketPage() {
  const {basket, setBasket} = useStoreContext();

    function handleRemoveItem(productId: number) {
    //setLoading(true);
    agent.Basket.removeItem(productId)
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        //.finally(() => setLoading(false))
  }

  if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

  return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.items.map(item => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                  <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}} />
                  <span>{item.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">${(item.price/100).toFixed(2)}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">${(item.price/100 * item.quantity).toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleRemoveItem(item.productId)} color='error'>
                <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
  )
}