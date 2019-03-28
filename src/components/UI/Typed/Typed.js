import React, { useEffect } from 'react';
import style from './Typed.module.scss';
import Typed from 'typed.js';


const typed = props => {
    useEffect(() => {
        const options = {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            onComplete: (arrayPos, self) => {window.open('','_self').close();}
          }
          
        new Typed("#typed", options);
    });
    return <React.Fragment>
        <div id="typed-strings">
            {props.children}
        </div>
        <span id="typed"></span>
        </React.Fragment>;
};

export default typed;