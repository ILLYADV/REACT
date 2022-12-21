import {Button, TableCell, TableRow} from "@mui/material";
import {useState} from "react";

const MyTableRow = (props) => {
    const {name, price, initial} = props.product;
    const [count, setCount] = useState(initial);

    function increaseCount() {
        setCount(count + 1);
        props.setGeneral(
            {
                quantity: props.general.quantity + 1,
                totalSum: props.general.totalSum + price
            }
        );
    }

    function reduceCount() {
        setCount(count - 1);
        props.setGeneral(
            {
                quantity: props.general.quantity - 1,
                totalSum: props.general.totalSum - price
            }
        );
    }

    return <TableRow>
        <TableCell component="th" scope="row" align="center">{name}</TableCell>
        <TableCell align="center">{price}</TableCell>
        <TableCell align="center">
            <Button variant="outlined" onClick={reduceCount} disabled={count === 0}>-</Button>
            {count}
            <Button variant="outlined" onClick={increaseCount}>+</Button>
        </TableCell>
        <TableCell align="center">{count * price}</TableCell>
    </TableRow>
}
export default MyTableRow