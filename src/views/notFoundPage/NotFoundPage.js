import React from 'react';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='FlexContainer'>
            <div className='Home'>
                <p>page not found</p>
                <p className='LightText'>you look lost</p>
                <a href="/">go home</a>
            </div>
            <section id="motion" className="xfixwidth ">
                <video loop autoPlay id="motionv">
                    <source src="http://wearespry.com/wp-content/themes/sprynew/library/video/404.mp4" type="video/mp4" />
                    <source src="http://wearespry.com/wp-content/themes/sprynew/library/video/404.ogv" type="video/ogg" />
                    <source src="http://wearespry.com/wp-content/themes/sprynew/library/video/404.webm" type="video/webm" />
                </video>
            </section>
        </div>
    )
};

export default NotFoundPage;