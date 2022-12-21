import './App.css';
import {useEffect, useState} from "react";
import VirtualizedList from "./components/VirtualizedList";

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => {
                let res = data.filter(word => word.title.split(' ').length < 8);
                setPhotos(res);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <VirtualizedList photos={photos}/>
    );
}

export default App;
