import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Card from "../../DonationCards/Card";
import Home from "../../../Pages/Home/Home";
import Search from "../../../Pages/Search/Search";


const InputButtonText = ({ donationCards }) => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchcat, setsearchcat] = useState([]);

  const search = () => {
    const search_category = donationCards?.filter(
      (searchData) => searchData.category == searchCategory
    );
    setsearchcat(search_category);
  };
  console.log(searchcat);
  return (
    <div>
      <div className="text-center lg:-mt-[250px] -mt-[150px] text-3xl font-bold ">
        <h1>I Grow By Helping People In Need</h1>
        <div className="flex items-center justify-center mt-5">
          <input
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="border-gray-400 rounded-lg border py-1 w-[200px] " required
            type="text"
          />

          <button onClick={search} className="btn bg-red-600 text-white ">
            Search
            </button>
           
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 container mx-auto mt-40 gap-4 ">
      {
        searchcat?.map(donationCard=> <Card donationCard={donationCard}></Card>)
        }
      </div>
      
    </div>
  );
};

export default InputButtonText;
