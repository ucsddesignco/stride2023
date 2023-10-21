import './styles.scss';
import React from "react";
import Pointer from '../../assets/featured companies/pointer.svg'

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
                    <h1>Apply <br></br> Now →</h1>
                </div>
            </div>
    )
}

export default Apply;
