import React from 'react';
import './redirecting.scss';
import loadingPic from './loading.gif';

class Redirecting extends React.Component {
    render() {
        window.location.href="https://www.netimpactberkeley.org/";
        return (
            <section className="redirectingPage">
                <div className="container">
                    <img src={loadingPic} alt="3 loading dots" />
                    <h1>Redirecting to the check-in page...</h1>
                    <p>Click <a href="https://www.netimpactberkeley.org/">here</a> if you're not redirected.</p>
                </div>
            </section>
        );
    }
}

export default Redirecting;
