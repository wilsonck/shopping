import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';

class App extends Component{
    render() {
        return(
            <Fragment>
                <Header />
                <Container>
                    <Filter />
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default App;
