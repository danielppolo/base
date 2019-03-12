import React from 'react';
import style from './CodeOfConduct.module.scss';
import Typed from '../../UI/Typed/Typed';

const codeOfConduct = props => {
    // Component description
    return (
    <div className={style.CodeOfConduct}>
        <Typed>
            <p>fig. 1</p>
            <p>Once inside, obliterate preconceptions.</p>
            <p>fig. 2</p>
            <p>Judgment is strictly forbidden.</p>
            <p>fig. 3</p>
            <p>This is no man's land.</p>
            <p>fig. 4</p>
            <p>Explore your creative expression.</p>
            <p></p> 
      </Typed>
    </div>
    );
}

export default codeOfConduct;