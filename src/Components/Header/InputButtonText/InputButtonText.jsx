import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Card from "../../DonationCards/Card";
import Home from "../../../Pages/Home/Home";
import Search from "../../../Pages/Search/Search";

const InputButtonText = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [cardData, setCarddata] = useState([]);
  const [searchcat, setsearchcat] = useState([]);
 
    useEffect(() => {
      fetch("/donation.json")
        .then(response => response.json())
        .then(data => setCarddata(data));
      
  },[])
  
  const search=()=>{
    const search_category = cardData.filter(search => search.category == searchCategory);
    setsearchcat(search_category);
    
  }
  return (
    <div>
       <div className="text-center lg:-mt-[250px] -mt-[150px] text-3xl font-bold ">
      <h1>I Grow By Helping People In Need</h1>
      <div className="flex items-center justify-center mt-5">
        <input value={searchCategory} onChange={e => setSearchCategory(e.target.value)} className="border-gray-400 rounded-lg border py-1 w-[200px] " type="text" />
        <Link to="/search">
          <button onClick={search} className="btn bg-red-600 text-white ">Search</button>
         
          </Link>
      </div>
      </div>
      
    </div>

  );
};

export default InputButtonText;
