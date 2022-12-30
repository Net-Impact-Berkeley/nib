import {useState} from 'react';
import './banner.scss';

const Banner = () => {
    const [exitedBanner, setExitedBanner] = useState(false);
    let now = new Date(Date.now());
    let month = now.getMonth();
    if (month == 4) {
        return (
            <div className={exitedBanner ? 'fadeOut bannerContainer' : 'fadeIn bannerContainer'}>
                <div className="banner">
                    <p>This month, we’re matching donations to AAPI groups. <a href="https://www.notion.so/Net-Impact-Berkeley-AAPI-Organizations-Donation-Matching-Campaign-5f39440223f0439686daa8d5ab56f169" target="_blank" rel="noopener noreferrer">Click here to read more and make a donation!</a></p>
                    <svg className="exit" onClick={() => setExitedBanner(true)} viewBox="0 0 194 194" xmlns="http://www.w3.org/2000/svg">
                        <rect x="129.527" y="33.3604" width="43" height="136" transform="rotate(45 129.527 33.3604)" />
                        <rect x="33.3604" y="64.4731" width="43" height="136" transform="rotate(-45 33.3604 64.4731)" />
                    </svg>
                </div>
            </div>
        );
    }
    else {
        return (<></>);
    }
}

export default Banner;