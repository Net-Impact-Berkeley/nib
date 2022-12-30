import './redirecting.scss';
import loadingPic from './loading.gif';

const Redirecting = () => {
    window.location.href="https://drive.google.com/file/d/1M3bzNtUQhUNrRr-P_s4xNDbk9YB6JWxG/view";
    return (
        <section className="redirectingPage">
            <div className="container">
                <img src={loadingPic} alt="3 loading dots" />
                <h1>Redirecting to the PM page...</h1>
                <p>Click <a href="https://drive.google.com/file/d/1M3bzNtUQhUNrRr-P_s4xNDbk9YB6JWxG/view">here</a> if you're not redirected.</p>
            </div>
        </section>
    );
}

export default Redirecting;
