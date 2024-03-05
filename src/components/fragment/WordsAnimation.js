import React from 'react';
import './styles/WordsAnimation.css';

const WordsAnimation = ({texto, children}) => {
    
    return ( <>
    
    <div className="line">
        <div className='children'>
            {children}
        </div>
        <h2 className='lineUp'>{texto}</h2>
    </div>
    
    </> );
}
 
export default WordsAnimation;