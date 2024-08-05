import React from 'react';
import Title from './assets/img/logo.png'
import loaction from './assets/img/location.png'
import Search from './assets/img/search.png'
import logoText from './assets/img/logotext.png'
import AboutImg from './assets/img/aboutImg.png'
import footerImg from './assets/img/footerImg.png'
import chefImg from './assets/img/chefResult.png'




function About() {
    return (
        <div className='backgrd'>
            <div className='abtnavTitle'>
                <img src={AboutImg} alt='' />
                {/* <div className='title'>
                    <img src={Title} alt='Title' />
                    <img src={logoText} alt='Title' />
                </div>
                <div className=''>
                    <img src={loaction} alt='location' />
                    <p>chennai</p>
                </div>
                <div className=''>
                    <img src={Search} alt='search' />
                    <input placeholder='Search' />
                </div>
                <nav className='navbtn'>
                    <button className='btn1'>I am a chef </button>
                    <button className='btn2'> I am a customer</button>
                </nav> */}
            </div>

            {/*Card Image  */}
            <div className='abtCard'>
                {/* <img src={chefImg} alt='ChefImage' /> */}
                <div className='dropDown'>
                    <select>
                        <option value="Cuisine">Cuisine</option>
                    </select>
                </div>
            </div>
<br></br>
            



            {/* Footer page */}
            <div className='footerAbt'>
                <img src={footerImg} alt='footerimg' />
            </div>
        </div>
    )
}

export default About