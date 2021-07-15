import React from 'react';
import CenterButton from './ButtonCircle';
import ClosetButton from './ClosetButtonComponent';
import CameraButton from './CameraButtonComponent';



function Footer(props) {
    return (
        <footer className="site-footer ">
            <div className="container">
                <div className="row">
                    <div className="col" id="cmndTile">
                    <ClosetButton />

                    <CenterButton />


                    <CameraButton />
                    </div>
                </div>
            </div>
           
        </footer >
    );
}

export default Footer;