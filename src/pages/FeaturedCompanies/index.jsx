import './styles.scss';
import React from "react";
import Lighthouse from '../../assets/featured companies/lighthouse.svg';
import Apply from '../../components/Apply';

const FeaturedCompanies = () => {
    return (
        <div>
            <div className='featured'>
                <div className='left'>
                    <h1>Featured Companies</h1>
                    <p>
                        Our participating companies come from diverse backgrounds, 
                        representing multiple industries, products, and services. 
                        Stop by Stride to connect with professionals and learn more 
                        about internship and full-time opportunities at a wide range 
                        of companies.
                    </p>
                </div> 
                <div className='right'>
                    <img src={Lighthouse} />
                </div>
            </div>

            <div className='attending'>
                <h2>Attending Companies</h2>
                <div className='companies'> 
                    <div className='item'>

                    </div>
                    <div className='item'>

                    </div>
                    <div className='item'>

                    </div>
                    <div className='item'>

                    </div>
                    <div className='item'>

                    </div>
                    <div className='item'>
 
                    </div>
                </div>
            </div>

            <div>
                <Apply />
            </div>
        </div>
    )
}

export default FeaturedCompanies;
