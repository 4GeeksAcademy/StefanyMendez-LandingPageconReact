
import React from "react";
import PropTypes from "prop-types";


const Jumbotron = (props) => {
    return (
        <div className="p-5 bg-body-tertiary rounded-3">
            <div className=" divJumbotron container-fluid py-5 rounded px-5">
                <h1>{props.title}</h1>
                <p className="col-md-12 col-sm-auto fs-4">{props.description}</p>
                <a className="btn btn-primary" href={props.buttonUrl}>{props.buttonLabel}</a>
                
            </div>
        </div>
    );
}

Jumbotron.propTypes={
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
 
};
export default Jumbotron;