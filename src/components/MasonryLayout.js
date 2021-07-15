import React from 'react';
import useWindowSize from '../hooks/windowResize.js';
import MasonryComponent from './MasonryComponent.js';

function getResponseStyles(width) {
    if (width <= 375) {
        return styles.mobile
    }
    if (width > 375 && width <= 642) {
        return styles.mobileLg
    }
    if (width > 375 && width <= 1024) {
        return styles.tablet
    }
    return styles.desktop
}

function MasonryLayout() {
    const { width } = useWindowSize()
    console.log(width)
    const containerStyle = getResponseStyles(width)

    return (
        <div style={containerStyle}>
            <MasonryComponent size='small' />
            <MasonryComponent size='medium' />
            <MasonryComponent size='large' />

            <MasonryComponent size='small' />
            <MasonryComponent size='large' />
            <MasonryComponent size='medium' />

        </div>
    )
}
const commonStyles = {
    margin: 0,
    padding: 0,
    width: '100vw',
    backgroundColor: 'pink',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 200px)',
    gridAutoRows: '9px',
    justifyContent: 'center'
}
const styles = {
    desktop: {
        ...commonStyles
    },
    tablet: {
        ...commonStyles
    },
    mobile : {
        ...commonStyles,
        gridTemplateColumns: 'repeat(auto-fill, 150px)',
    },
    mobileLg : {
        ...commonStyles,        

    }
}

export default MasonryLayout;