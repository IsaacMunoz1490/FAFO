import { Button, ButtonGroup } from 'reactstrap';
import React, { useEffect, useRef } from 'react';

// adding the camera effect, now I am able to take a picture using my webcam. //

const CameraButton = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const stripRef = useRef(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia({ video: {width: 300 } })
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error("error:", err);
        });
    };
    // Taking a snapshot below
    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");
    // we can change the width and height from here. 
        const width = 360;
        const height = 250;
        photo.width = width;
        photo.height = height;
    
        return setInterval(() => {
          ctx.drawImage(video, 0, 0, width, height);
        }, 200);
      };
    
        const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;
        
        console.warn(strip);

        const data = photo.toDataUrl ("../assets/hello.png");

        console.warn(data);
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);
    };

    return (
            <ButtonGroup>
                <Button id="camera" onclick={() => takePhoto()}>
                   <i className=" fa fa-camera "></i>
                </Button>
                <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
                <canvas ref={photoRef} />
                <div>
                    <div ref={stripRef}></div>
                </div>
            </ButtonGroup>
    );
}
export default CameraButton;