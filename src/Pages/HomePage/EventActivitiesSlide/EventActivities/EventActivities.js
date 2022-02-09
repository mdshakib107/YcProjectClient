import { Box } from '@mui/system';
import React from 'react';
import OnGoing from '../OnGoing/OnGoing';
import Recent from '../Recent/Recent';
import Upcomming from '../Upcomming/Upcomming';

const EventActivities = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Upcomming></Upcomming>
            <OnGoing></OnGoing>
            <Recent></Recent>
        </Box>
    );
};

export default EventActivities;