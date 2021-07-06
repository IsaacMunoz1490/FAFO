import React from 'react';
import MasonryComponent from './MasonryComponent.js';

function MasonryLayout() {
    return (
        <div style={styles.pin_container}>
            <MasonryComponent size='small' />
            <MasonryComponent size='medium' />
            <MasonryComponent size='large' />

            <MasonryComponent size='small' />
            <MasonryComponent size='medium' />
            <MasonryComponent size='large' />



        </div>
    )
}
const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '150vw',
        backgroundColor: 'pink',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center'

    }
}

export default MasonryLayout;