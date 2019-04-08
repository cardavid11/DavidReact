import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({ dishSource }) {
    if (dishSource == null) {
        return (<div></div>);
    }
    var result = [];
    const commentResult = dishSource.comments.map((comment) => {
        console.log(comment);
        return (
            <div id={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        );
    });
    result.push(<h4> Comments </h4>);
    result.push(commentResult);
    return (result);
}

const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dishSource={props.dish} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;