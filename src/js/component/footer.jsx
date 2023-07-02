import React from "react";
import PropTypes from "prop-types";

const Footer = (props)=>{
    return(
        <div class= "footer card-footer p-4 text-white text-center" >
            <span>{props.text}</span>
        </div>
    )
}

Footer.protoTypes={
    text: PropTypes.string,
}

export default Footer
