import React, {useState} from 'react';
import {List} from "react-virtualized";
import {Col, Container, Row} from "react-bootstrap";
import Thumbnail from "./Thumbnail";

const VirtualizedList = ({photos}) => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");

    const showPhoto = (event) => {
        event.preventDefault();
        let image = event.target.textContent.replace("/150/", "/600/");
        setImage(image);
        setOpen(true);
    }

    function rowRenderer({key, index, style}) {
        return (
            <div key={key} style={style}>
                <Container>
                    <Row>
                        <Col xs={1}>{photos[index].id}</Col>
                        <Col>{photos[index].title}</Col>
                        <Col><a onClick={showPhoto} href='#'>{photos[index].thumbnailUrl}</a></Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <>
            <List className="text-center"
                  width={1000}
                  height={500}
                  rowCount={photos.length}
                  rowHeight={30}
                  rowRenderer={rowRenderer}
            />
            <Thumbnail open={open} setOpen={setOpen} image={image}/>
        </>
    );
};

export default VirtualizedList;