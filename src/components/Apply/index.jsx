import './styles.scss';
import React from "react";
import Pointer from '../../assets/featuredcompanies/pointer.svg'

const Apply = () => {
    return (
        <div className='apply'>
                <div className='left-content'>
                    <h1>
                        Ready to stride and meet company recruiters?
                    </h1>
                </div>
                <div className='right-content'>
                    <img src={Pointer} />
                    <a className='apply-button' href="https://google.com" target="_blank" rel="noopener noreferrer"><h1>Apply <br></br> Now →</h1></a>
                    
                </div>
            </div>
    )
}

export default Apply;