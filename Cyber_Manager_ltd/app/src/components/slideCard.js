import React from "react";
import { Card, Button} from 'react-bootstrap'

const SlideCard = props => {
    let {imgSrc} = props.data
    return(
        <>
        <Card className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" src={imgSrc} />
            </div>
        </Card>
        </>
    );
}

export default SlideCard;