import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 pl-5">
                        <h1>One stop block for everything IT</h1>
                        <p>We are your go to personalized tailor made IT solutions provider for Web & Mobile applications development</p>
                        <button type="button" className="btn btn-dark">Hire Us</button>
                </div>
                <div className="col-md-6 offset-md-1 mt-5">
                    <img className="img-fluid" style={{height:'auto'}} src={frame} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;