import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import MyTableRow from "./MyTableRow";

const Cart = ({products}) => {
    function getInitQuantity(products) {
        return products.reduce((acc, product) => acc + product.initial, 0);
    }

    function getInitTotalSum(products) {
        return products.reduce((acc, product) => acc + product.initial * product.price, 0);
    }

    const [general, setGeneral] = useState({
        quantity: getInitQuantity(products),
        totalSum: getInitTotalSum(products)
    });

    return (
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: "cadetblue"}}>
                    <TableCell align="center"><b>Name</b></TableCell>
                    <TableCell align="center"><b>Price</b></TableCell>
                    <TableCell align="center"><b>Quantity</b></TableCell>
                    <TableCell align="center"><b>Total</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <MyTableRow key={product.id} product={product} general={general} setGeneral={setGeneral}/>))
                }
                <TableRow style={{backgroundColor: "lightgreen"}}>
                    <TableCell align="center" colSpan={2}><b>Totals</b></TableCell>
                    <TableCell align="center"><b>{general.quantity}</b></TableCell>
                    <TableCell align="center"><b>{general.totalSum}</b></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
export default Cart