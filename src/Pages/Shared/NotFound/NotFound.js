import React from 'react';
import lazy from '../../../images/lazy.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={lazy} alt="" srcset="" />
        </div>
    );
};

export default NotFound;