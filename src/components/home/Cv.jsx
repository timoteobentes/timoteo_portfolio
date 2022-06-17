import React from 'react';
import CV from '../../CV.pdf';

const CVO = () => {
    return (
        <div>
            <a href={CV} className='cvBtn'>Baixar CV</a>
        </div>
    ) 
}

export default CVO;