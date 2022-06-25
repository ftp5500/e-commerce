import {Alert} from "react-bootstrap";
import React from 'react';


function AlertMessage({color, message}) {

    return (
        <div>
            <Alert variant={color}>
                {message}
            </Alert>

        </div>
    );

}


export default AlertMessage;
