import './styles.scss';
import Lighthouse from '../../assets/featuredcompanies/lighthouse.svg';
import Apply from '../../components/Apply';

import Domesmobile from "../../assets/domesmobile.svg";
import Domesdesktop from "../../assets/domesdesktop.svg";

//Company Images
import Apple from "../../assets/featuredcompanies/companylogos/apple.png"
import Google from "../../assets/featuredcompanies/companylogos/google.png"
import Aops from "../../assets/featuredcompanies/companylogos/aops.png"
import Arup from "../../assets/featuredcompanies/companylogos/arup.svg"
import Illumina from "../../assets/featuredcompanies/companylogos/illumina.png"

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
            <div className='domes'>
                <img src={Domesmobile} className='domes-mobile'/>
                <img src={Domesdesktop} className='domes-desktop'/>
            </div>
           
            <div className='attending'>
                
                <h2>Attending Companies</h2>
                <div className='companies'> 
                    <div className='item'>
                        <img src={Apple} />

                    </div>
                    <div className='item'>
                        <img src={Google} />
                    </div>
                    <div className='item'>
                        <img src={Arup} />
                    </div>
                    <div className='item'>
                    <img src={Illumina} />
                    </div>
                    <div className='item'>
                        <img src={Aops} />
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