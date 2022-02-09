import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import EventActivities from '../EventActivitiesSlide/EventActivities/EventActivities';
import SpotLight from '../SpotLight/SpotLight';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <EventActivities></EventActivities>
            <SpotLight></SpotLight>

        </>
    );
};

export default Home;