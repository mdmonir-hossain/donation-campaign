import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import InputButtonText from "../../Components/Header/InputButtonText/InputButtonText";


const Home = () => {

    const donationCards = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <InputButtonText></InputButtonText>
            <DonationCards donationCards={donationCards}></DonationCards>
        </div>
    );
};

export default Home;