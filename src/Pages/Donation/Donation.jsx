import React, { useEffect, useState } from 'react';
import AddtoDonation from '../../Components/AddtoDonation/AddtoDonation';

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [nodata, setNodata] = useState("");
    const [seeall, setSeeall] = useState(false);

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
                                seeall ? 
                                donation.map(alldonations => <AddtoDonation alldonations={alldonations} > </AddtoDonation>)   
                            
                            :  donation.slice(0,4).map(alldonations => <AddtoDonation alldonations={alldonations} > </AddtoDonation>)
                            }
                        </div>
                        <div className='flex justify-center items-center'>
                        {
                            donation.length > 4 && <button className='btn' onClick={() => setSeeall(true)}>{ seeall? "" : "See All"}</button>
                            
                            }
                            </div>
                    </div>
            }
        </div>
    );
};

export default Donation;