import React from 'react';

function MasonryComponent(props) {
    return(
        <div style={{
            ...styles.pin,
            ...styles[props.size]
        }}>
            

        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '10px',
        backgroundColor: "white"
    },
    small: {
        gridRowEnd: 'span 25'
    },
    medium: {
        gridRowEnd: ' span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    },
}

export default MasonryComponent;

//this is being passed to the Masonry Layout and then rendered at home.js
