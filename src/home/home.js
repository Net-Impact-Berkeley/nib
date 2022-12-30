import React from 'react';
import Button from 'components/button';
import CallToAction from 'components/callToAction';
import 'home/home.scss';
import 'projects/projects.scss';

import nibLogo from 'img/nib-logo-new.png';
import heroBlob1 from './img/shapes/blob1.png';
import heroBlob2 from './img/shapes/blob2.png';
import secondSection1 from './img/hillpic.png';
import secondSection2 from './img/niblets.png';
import membersSectionImage from './img/whoarewe.png';
import SpectrumSection from './spectrumSection';
import pastClients from './data/pastClientsHighlights';

const Home = () => {
    document.title = 'NIB | Home';

    return (
        <section className="homePage">
        <section className="splash">
            <section className="container">
                <img src={nibLogo} className="showOnMobile emgajen" alt="3 NIB members posing" />
                <span className="left">
                    <h1>Strategy Consulting Meets Social Good</h1>
                    <p>UC Berkeley's Social Impact Consulting Club</p>
                    <Button
                        link="/apply"
                        buttonText="Join Us"
                    />
                </span>
            </section>
            <div className="right">
                <svg className="bigBlob blob" width="650" height="572" viewBox="0 0 650 572" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" />
                </svg>
                <svg className="miniBlob blob" width="91" height="75" viewBox="0 0 91 75" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89.6851 32.0176C93.2985 41.7664 81.203 57.1611 65.3926 66.226C49.4787 75.321 29.9208 77.9597 17.5121 70.9377C5.10338 63.9157 0.0150779 47.236 0.413986 32.1847C0.916331 17.1033 6.9738 3.68343 15.7691 0.956559C24.5289 -1.70698 35.9586 6.28935 51.3346 12.3391C66.7462 18.3254 86.0361 22.3321 89.6851 32.0176Z" />
                </svg>

                <img src={heroBlob1} className="seniors" alt="NIB seniors relaxing on a hill" />
                <img src={heroBlob2} className="hideOnMobile emgajen" alt="3 NIB members posing" />
            </div>
        </section>
        <svg className="wave" viewBox="0 0 1440 195" xmlns="http://www.w3.org/2000/svg">
            <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" />
        </svg>
        <section className="inspired">
            <div className="showOnMobile">
                <img src={secondSection1} className="hillpic" alt="NIB members chilling on a hill" />
            </div>
            <div className="blobs">
                <svg className="rope" width="664" height="904" viewBox="0 0 664 904" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M591.029 420.548L591.032 420.558L591.035 420.567C599.431 446.496 594.165 482.997 582.924 516.472C577.327 533.142 570.292 548.926 562.865 562.084C555.415 575.284 547.658 585.682 540.676 591.724C526.466 604.018 504.738 611.892 478.696 617.535C453.468 623.001 424.564 626.304 395.17 629.663L392.505 629.968C362.261 633.427 331.614 637.014 304.361 643.165C277.142 649.307 252.995 658.069 235.915 672.066C226.867 679.482 210.258 683.34 189.028 684.352C167.957 685.356 142.909 683.54 117.529 680.123C66.7953 673.294 15.187 660.136 -7.97055 650.72C-49.5324 630.041 -78.4822 612.685 -97.3859 591.603C-116.172 570.652 -125.192 545.832 -126.365 509.795L-126.366 509.784L-126.366 509.773C-127.127 491.425 -128.917 473.474 -130.789 456.199C-131.111 453.229 -131.435 450.281 -131.757 447.354C-133.309 433.229 -134.806 419.613 -135.723 406.575C-137.94 375.043 -136.708 347.458 -124.994 325.212L-124.99 325.203L-124.985 325.194C-113.401 302.755 -91.1107 285.253 -64.3485 269.467C-50.9973 261.592 -36.6218 254.192 -22.0297 246.836C-19.4281 245.524 -16.819 244.214 -14.2079 242.902C-2.19999 236.871 9.85193 230.817 21.4275 224.533C38.5982 215.395 54.8479 205.72 70.4993 196.402C80.4158 190.498 90.0922 184.736 99.6107 179.345C124.291 165.367 148.2 153.692 173.557 147.643C223.885 135.831 280.76 146.781 326.776 173.047C349.726 186.498 369.996 203.791 390.935 223.065C396.476 228.165 402.066 233.407 407.765 238.75C423.558 253.557 440.18 269.142 458.849 284.624C468.843 292.912 479.318 301.108 489.85 309.349C506.264 322.192 522.818 335.145 537.915 348.729C562.623 370.963 582.774 394.358 591.029 420.548Z" strokeWidth="5"/>
                </svg>
                <svg className="topRight blob" width="150" height="155" viewBox="0 0 150 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.8968 124.078C49.8008 118.651 38.4555 112.165 31.2613 102.176C24.1084 92.2507 21.1703 78.7814 22.3096 64.2079C23.4266 49.7394 28.6021 33.9981 38.6939 30.1735C48.8494 26.3076 63.9437 34.2533 78.7511 38.4061C93.6635 42.5813 108.33 43.0272 116.648 50.8415C125.029 58.6146 126.934 73.8386 125.041 89.6232C123.044 105.385 117.228 121.813 105.908 127.789C94.6293 133.83 77.9927 129.506 63.8968 124.078Z" />
                </svg>
                <svg className="bottomLeft blob" width="163" height="167" viewBox="0 0 163 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M145.25 82.5374C141.263 98.6358 127.069 109.343 113.339 122.396C99.542 135.4 86.1404 150.7 72.3693 150.659C58.7165 150.601 44.6437 135.269 34.4311 117.019C24.2185 98.7687 17.8833 77.7183 26.4059 69.1078C34.8608 60.4468 58.2412 64.2762 79.2265 58.7354C100.161 53.2623 118.633 38.3686 130.894 41.7093C143.205 44.9822 149.356 66.4218 145.25 82.5374Z" />
                </svg>

                <img src={secondSection1} className="niblets" alt="Young NIB members" />
                <img src={secondSection2} className="hillpic" alt="NIB members chilling on a hill" />
            </div>
            <div className="container">
                <div></div>
                <div className="right">
                    <h1>Driven to Make a Difference</h1>
                    <p>We are a student-run consulting group at UC Berkeley that provides custom strategies for clients that range from social enterprises to non-profits to traditional for-profit businesses.</p>
                    <Button
                        link="/about"
                        buttonText="Learn About Us"
                    />
                </div>
            </div>
            <br className="clear" />
        </section>
        <SpectrumSection />
        <svg className="wave" viewBox="0 0 1440 195" xmlns="http://www.w3.org/2000/svg">
        <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" />
        </svg>

        <section className="partners ">
            <div className="container">
                <h1>150+ Past Clients</h1>
                {pastClients.map((client) => {
                    return <img src={client.img} alt={client.alt} key={client.alt} />;
                })}
            </div>
        </section>

        <section className="who">
            <div className="grid container">
                <img src={membersSectionImage} alt="3 NIB members posing" />
                <div>
                    <h2>Who We Are</h2>
                    <p>Net Impact Berkeley is a community of forward-thinking student consultants motivated by the desire to make
                    an impact. Our members develop professionally through hands-on project experiences and also grow personally
                    through the support system and social community of NIBFam.</p>
                    <Button
                        link="/members"
                        buttonText="Learn About Our Members"
                    />
                </div>
            </div>
        </section>
        <CallToAction />
      </section>
    );
} 

export default Home;
