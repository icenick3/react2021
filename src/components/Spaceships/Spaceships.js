import React, {useEffect, useState} from 'react';

import Spaceship from "../Spaceship/Spaceship";

const Spaceships = () => {
    const [spaceships, setSpaceships] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpaceships(value.filter(item => item.launch_year !== '2020')))

    }, [])
    // let spaceshipsPop = spaceships.pop()
    // console.log(spaceships)
    return (
        <div>
            {spaceships.map(value => <Spaceship key={value.flight_number} flight_number={value.flight_number}
                                                mission_name={value.mission_name} launch_year={value.launch_year}
                                                mission_patch_small={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Spaceships;