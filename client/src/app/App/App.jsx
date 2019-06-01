import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


function App({ store, history }) {
    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    );
}

export default App;
