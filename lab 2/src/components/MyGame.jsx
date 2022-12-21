import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";

const GAME_STATUS = {
    NotStarted: "Натисніть 'Нова гра' для початку",
    Guessing: "Введіть число від 1 до 1000 (10 спроб)",
    Lost: "Ви програли",
    Won: "Вітаємо! Ви перемогли"
}

const MyGame = () => {
    const [gameStatus, setGameStatus] = useState(GAME_STATUS.NotStarted);
    const [attempts, setAttempts] = useState(0);
    const [number, setNumber] = useState(0);
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");

    const startGame = () => {
        setGameStatus(GAME_STATUS.Guessing);
        setMessage("");
        setAttempts(0);
        let randomNumber = Math.floor(Math.random() * 1000) + 1;
        setNumber(randomNumber);
    }

    const checkNumber = () => {
        if (Number(number) === Number(inputRef.current.value)) {
            setGameStatus(GAME_STATUS.Won);
        } else if (Number(number) < Number(inputRef.current.value)) {
            setMessage(`${message} Число < ${inputRef.current.value};`);
        } else {
            setMessage(`${message} Число > ${inputRef.current.value};`);
        }
        setAttempts(attempts + 1);
        if (attempts === 9) {
            setGameStatus(GAME_STATUS.Lost)
        }
    }


    return (
        <>
            <Button variant="outlined" color="success" onClick={startGame}
                    disabled={gameStatus === GAME_STATUS.Guessing}>Нова гра</Button>
            <TextField inputRef={inputRef} type="number" InputProps={{inputProps: {min: 1, max: 1000}}}
                       label="Число" variant="outlined" disabled={gameStatus !== GAME_STATUS.Guessing}/>
            <Button variant="outlined" color="secondary" onClick={checkNumber}
                    disabled={gameStatus !== GAME_STATUS.Guessing}>Перевірити</Button>
            <p>Спроб: {attempts}</p>
            <p>{message}</p>
            <p>{gameStatus}</p>
        </>
    );
};

export default MyGame;