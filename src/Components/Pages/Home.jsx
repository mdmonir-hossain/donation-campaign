import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = () => {
    const loaderData = useLoaderData();

    return (
        <div className="grid grid-cols-4 gap-2">
            {
                loaderData.map(donationData => <Cards donationData={donationData} ></Cards> ) 
            }
        </div>
    );
};

export default Home;