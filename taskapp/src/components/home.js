import React from 'react';
import banner from '../banner.jpg';

const HomeComponent = () => {
    return(
        <div className="card">
            <div className="card-header" role="banner">
                <h2 className="m-4">Welcome to Task Application</h2>
								<img src={banner} alt="Home Page Application banner" />
            </div>
        </div>
    )
}

export default HomeComponent;