import React from 'react';

import './Starship.css'

const Spaceship = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className={'main'}>
            <div className={'mg0'}>
                <h3>{mission_name}</h3>
                <h3> {launch_year}</h3>
            </div>
            <div className={'mg0'}>{<img width={'200px'} height={'200px'} src={mission_patch_small}
                                         alt="starship"/>}</div>
        </div>
    )
};

export default Spaceship;