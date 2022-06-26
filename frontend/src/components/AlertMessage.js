import {Alert} from "react-bootstrap";
import React from 'react';


function AlertMessage({ variant, message}) {

    return (
        <div>
            <Alert variant={variant}>
                {message}
            </Alert>

        </div>
    );

}


export default AlertMessage;
