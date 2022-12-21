import React, {useState} from 'react';
import {Button} from "@mui/material";

const MyCounter = ({initial, min, max, isReset = true}) => {
    const [count, setCount] = useState(initial || 0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(initial || 0);
    }

    const isDisabled = (num) => {
        return count === num;
    }


    return (
        <div>
            <Button variant="outlined" onClick={increase} disabled={isDisabled(max)}>+</Button>
            {count}
            <Button variant="outlined" onClick={decrease} disabled={isDisabled(min)}>-</Button>
            {isReset && <Button variant="outlined" onClick={reset} disabled={isDisabled(initial || 0)}>Reset</Button>}
        </div>
    );
};

export default MyCounter;