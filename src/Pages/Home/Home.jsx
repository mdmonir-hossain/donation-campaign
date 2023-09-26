import { useLoaderData, useParams } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import InputButtonText from "../../Components/Header/InputButtonText/InputButtonText";
import { useEffect, useState } from "react";


const Home = () => {
   
   
        const donationCard = useLoaderData();
    
    const [donationCards, setDonationCards] = useState(donationCard);
    
    

  
    return (
        <div>
            <Banner></Banner>
            <InputButtonText donationCards={donationCards}></InputButtonText>
            <DonationCards donationCards={donationCards}></DonationCards>
        </div>
    );
};

export default Home;