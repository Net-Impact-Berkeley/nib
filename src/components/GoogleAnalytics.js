import ReactGA from 'react-ga';

export const initGoogleAnalytics = () => {
    const isGAEnabled = process.env.NODE_ENV === 'production';

    if (isGAEnabled) {
        ReactGA.initialize("UA-175474593-1");
    }

    return isGAEnabled;
};
