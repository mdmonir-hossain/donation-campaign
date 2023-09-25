import React, { useEffect, useState } from 'react';
import AddtoDonation from '../../Components/AddtoDonation/AddtoDonation';

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [nodata, setNodata] = useState("");

    useEffect(() => {
        const addDonations = JSON.parse(localStorage.getItem("donations"));
        if(addDonations){
            setDonation(addDonations);
        } else {
            setNodata("No Data Found")
        }
    },[])
    return (
        <div>
            {
                nodata ? <p className='h-[80vh] flex justify-center items-center'> {nodata}</p> :
                    <div>
                        <div className='grid grid-cols-2 gap-5 w-3/4 mx-auto'>
                            {
                                donation.map(alldonations => <AddtoDonation alldonations={alldonations} > </AddtoDonation>)   
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;