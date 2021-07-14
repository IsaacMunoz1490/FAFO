import React from 'react';
import CenterButton from './ButtonCircle';
import ClosetButton from './ClosetButtonComponent';
import CameraButton from './CameraButtonComponent';



function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container ml-1"> 
                <div className="row">
                    <ClosetButton />
                    <div className="col">
                      {/*this is where the other buttons are going to be inserted.  */}
                        <CenterButton />
                        
                    </div>
                    <CameraButton />

                </div>
            </div>
        </footer>
    );
}

export default Footer;