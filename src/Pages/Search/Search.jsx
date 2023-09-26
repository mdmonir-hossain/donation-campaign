import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import InputButtonText from "../../Components/Header/InputButtonText/InputButtonText";
import SearchCards from "./SearchCards";


const Search = ({}) => {
    
    return (
        <div>
            <Banner></Banner>
            <InputButtonText></InputButtonText>
            
        </div>
    );
};

export default Search;