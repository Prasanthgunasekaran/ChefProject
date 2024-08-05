import React from 'react';
import Title from './assets/img/logo.png'
import logoText from './assets/img/logotext.png'
import image4 from './assets/img/image 4.png'
import image5 from './assets/img/image 5.png'
import image6 from './assets/img/image 6.png'
import IconBox from './assets/img/icobox.png'
import boxIcon from './assets/img/boxIcon.png'
import vegImg from './assets/img/vegimg.png'
import footerImg from './assets/img/footerImg.png'





function Main() {
    return (
        // NavBar
        <div>
            <div className='navTitle'>
                <div className='title'>
                    <img src={Title} alt='Title' />
                    <img src={logoText} alt='Title' />
                </div>
                <nav className='navbtn'>
                    <button className='btn1'>I am a chef </button>
                    <button className='btn2'> I am a customer</button>
                </nav>
            </div>

            {/*About Page*/}
            <div className='aboutTitle'>
                <div className='aboutTxt'>
                    <h2>Home-Cooked food for<br /> every mood</h2>
                    <p>Explore Homemade delicacies</p>
                    <div className='aboutbtn'>
                        <input placeholder='Find your chef by loaction......' />
                        <button className='btnchef'>Find Chef</button>
                    </div>
                </div>
            </div>

            {/* About2 */}
            <div className=''>
                <div className='abtTitle'>
                    <h2>Let's Get Started</h2>
                </div>
                <div className='abtGrid'>
                    <div className='gridMain1'>
                        <img src={image4} />
                        <h3>Find chefs across locations </h3>
                        <p>We have home chefs with professional training and passionate home chefs with years of experience filling happy bellies</p>
                    </div>
                    <div className='gridMain2'>
                        <img src={image5} />
                        <h3>Find Your Food  </h3>
                        <p> What are you in the mood for today?
                            North-Indian or South-Indian, Chinese or Continental, Mexican or Tibetan?
                            A cosy meal for 2 or a feast for many?
                            Want your food ASAP or over the weekend?
                            We have it all!</p>
                    </div>
                    <div className='gridMain3'>
                        <img src={image6} />
                        <h3>Place Your Order </h3>
                        <p>  Contact your chosen chef directly or order ontheir webpage and have homemade delicacies delivered in a jiffy</p>
                    </div>

                </div>
            </div>

            {/* Chef Lan Page */}
            <div className=''>
                <div className='chefTitle'>
                    <h2>Why try The Chef Lane?</h2>
                </div>
                <div className='cheflist'>
                    <div className='listIcon'>
                        <img src={IconBox} alt='Icon' />
                        <p>Because home food is soul food!</p>
                    </div>
                    <div className='listIcon'>
                        <img src={IconBox} alt='Icon' />
                        <p>All our home chefs are registered with the FSSAI(Food Safety and Standards Authority of India) </p>
                    </div>
                    <div className='listIcon'>
                        <img src={IconBox} alt='Icon' />
                        <p># vocalforlocal</p>
                    </div>
                    <div className='listIcon'>
                        <img src={IconBox} alt='Icon' />
                        <p> Home Chefs bring a tried and tested repertoire of home-cooked delicacies from their homes to yours</p>
                    </div>
                </div>
            </div>

            {/*Testing Mod */}
            <div className=''>
                <div className='abtTitle'>
                    <h2>Testimonials</h2>
                </div>
                <div className='testmodel'>
                    <div className='box'><p>The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem ipsum dummy text Lorem ipsum dummy text lorem ipsum dummy text</p>
                        <div className='boxIcon'>
                            <img src={boxIcon} alt='Icon' />
                            <h4>Chef Larry Alexander </h4>
                        </div>
                    </div>
                    <div className='box'>
                        <p>The Chef Lane is the best for any chef. Lorem ipsum dummy text lorem ipsum dummy text Lorem ipsum dummy text lorem ipsum</p>
                        <div className='boxIcon'>
                            <img src={boxIcon} alt='Icon' />
                            <h4>Chef Larry Alexander </h4>
                        </div>
                    </div>
                </div>
                <div className='vegimg'>
                    <img src={vegImg} alt='vegimg'></img>
                </div>
            </div>

            {/* Footer */}
            <div className='footer'>
                <img src={footerImg} alt='footerimg' />
                {/* <div className='footerTitle'>
                    <div className='footerLogo'>
                        <img src={Title} alt='Title' />
                        <img src={logoText} alt='Title' />
                    </div>
                    <div className='footerMenu'>
                        <p>Mission</p>
                        <p>FQA</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Condition</p>
                        <p>Licenses & Registrations</p>
                    </div>
                    <div className='footerUs'>
                        <h4>Get in touch with us at</h4>
                        <a>support@thecheflane.com</a>
                        <button>Contact Us</button>
                    </div>
                </div>
                <hr/>   
                <div className='footerCopy'>
                    <p>Copyrights 2023 Specialiest Foods rights reserved.</p>|
                </div> */}
            </div>
        </div>

    )
}

export default Main