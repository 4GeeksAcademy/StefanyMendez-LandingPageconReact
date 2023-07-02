import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (  
       

            <div className="card mx-3 border">
                <img src={props.imgUrl} className="img-card card-img-top" alt="Card Image"></img>
                <div className="card-body">
                    <h5 className="card-title fs-2">{props.title}</h5>
                    <p className="card-text fs-5">{props.description}</p>
                </div>
                <div class="card-footer py-3">
                <a class="btn btn-primary" href={props.buttonUrl}>{props.buttonLabel}</a>
                </div>
            </div>   
    )
}
Card.protoTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
}
export default Card;

