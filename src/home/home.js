import React, { useState } from "react";
import Button from 'components/button';
import CallToAction from 'components/callToAction';
import 'home/home.scss';
import 'projects/projects.scss';

import nibLogo from 'img/nib-logo-new.png';
import heroBlob1 from './img/shapes/googie.png';
import heroBlob2 from './img/shapes/group.png';
import secondSection1 from './img/exec.png';
import secondSection2 from './img/railroad.png';
import membersSectionImage from './img/whoarewe.png';
import SpectrumSection from './spectrumSection';
import pastClients from './data/pastClientsHighlights';
import splashBlob1 from './img/splashblob1.png';
import splashBlob2 from './img/splashblob2.png';
import splashBlob3 from './img/splashblob3.png';
import splashBlob4 from './img/splashblob4.png';

const Home = () => {
    document.title = 'NIB | Home';

    return (
        <section className="homePage">
        <section className="splash">
            <section className="container">
                <img src={nibLogo} className="showOnMobile emgajen" alt="3 NIB members posing" />
                    <h1>Strategy Consulting Meets Social Good</h1>
                    <p>UC Berkeley's Social Impact Consulting Club</p>
                    <Button
                        link="/apply"
                        buttonText="Apply Now"
                        arrow
                    />
            </section>
            <div className="blobs">

                 <svg xmlns="http://www.w3.org/2000/svg" width="756" height="509" viewBox="0 0 756 509" fill="none" className="lightblueWave">
                    <path d="M532.505 505.624L532.489 505.627L532.473 505.63C522.682 507.546 511.413 505.715 498.801 501.69C487.073 497.948 474.466 492.408 461.113 486.541C460.121 486.105 459.125 485.668 458.126 485.229C429.394 472.621 397.404 459.034 365.385 460.503C334.94 461.889 304.78 472.07 274.422 482.318C272.867 482.842 271.312 483.367 269.757 483.891C237.682 494.694 205.273 505.111 171.268 505.584C102.401 506.535 29.1368 474.128 8.11303 413.295C-2.37497 382.947 2.89825 352.91 15.1658 321.257C21.3006 305.428 29.1545 289.27 37.6001 272.522C39.5195 268.716 41.4699 264.878 43.4369 261.008C50.1086 247.881 56.9703 234.38 63.4539 220.464L63.4597 220.451C68.2297 210.065 72.7759 199.738 77.226 189.629C88.2607 164.564 98.7042 140.841 110.502 120.885C127.035 92.9207 145.833 73.0803 171.823 67.5514C198.145 61.9519 228.741 65.9746 262.948 70.4722L263.741 70.5765C298.102 75.0937 335.836 79.9635 375.422 75.37L375.423 75.3698C410.992 71.2171 447.082 54.9945 482.612 39.0242C486.51 37.2721 490.401 35.5231 494.284 33.7933C533.801 16.1896 572.472 0.577769 609.815 2.69242C646.835 5.04212 682.779 25.1037 709.509 53.5884C736.244 82.0795 753.497 118.715 753.5 153.872C753.263 188.957 734.006 223.281 708.781 257.454C697.987 272.078 686.175 286.58 674.391 301.047C672.432 303.453 670.473 305.857 668.521 308.261C654.847 325.093 641.455 341.887 630.143 358.641C612.937 383.858 600.499 410.164 589.531 433.364C585.931 440.977 582.49 448.255 579.09 455.051C572.171 468.882 565.452 480.671 557.933 489.46C550.445 498.213 542.292 503.841 532.505 505.624Z" stroke="#5EC3EF" stroke-width="5"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="761" height="516" viewBox="0 0 761 516" fill="none" className="darkblueWave">
  <path d="M615.897 3.22872C691.24 8.01966 758 75.0928 758 146.957C757.523 218.821 689.809 295.476 644.985 362.07C599.683 428.664 576.794 485.676 534.831 493.342C493.344 501.487 432.306 460.284 369.838 463.159C306.893 466.034 242.517 512.027 173.85 512.985C104.705 513.943 31.7463 469.387 10.2877 407.105C-11.1708 344.823 18.3943 264.814 51.7743 192.95C84.6775 121.086 121.395 57.8454 175.28 46.3472C229.165 34.8489 300.217 75.0928 378.422 65.9901C456.149 56.8873 540.076 -1.08312 615.897 3.22872Z" stroke="#1579BC" stroke-width="6"/>
                </svg>
                <img src={splashBlob1} className="splashBlob1" />
                <img src={splashBlob2} className="splashBlob2" />
                <img src={splashBlob3} className="splashBlob3" />
                <img src={splashBlob4} className="splashBlob4" />

            </div>
        </section>
        <svg className="wave" viewBox="0 0 1440 195" xmlns="http://www.fw3.org/2000/svg">
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

                <img src={secondSection1} className="exec" alt="Fall 2022 Exec" />
                <img src={secondSection2} className="railroad" alt="NIB members posing on a railroad" />
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
