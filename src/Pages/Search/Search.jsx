import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import InputButtonText from "../../Components/Header/InputButtonText/InputButtonText";
import SearchCards from "./SearchCards";


const Search = ({donationCard}) => {
    console.log(donationCard);
    return (
        <div>
            <Banner></Banner>
            <InputButtonText></InputButtonText>
            <SearchCards donationCard={donationCard}></SearchCards>
        </div>
    );
};

export default Search;