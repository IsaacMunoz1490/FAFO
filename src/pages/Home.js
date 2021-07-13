import React, { Component } from 'react';
import Header from '../components/HeaderComponent';
import MasonryLayout from '../components/MasonryLayout.js';
import Footer from '../components/FooterComponent';


class Main extends Component {
    render() {
        return (
            <>
            <Header/>
            <MasonryLayout />
            <Footer />
            </>
        );
    }
}
export default Main;

// We are going to bring everything to the HOME page. //