import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

const SearchCards = ({donationCard}) => {
    console.log(donationCard);
    const {
        category,
        category_id,
        picture,
        card_bg_color,
        title,
        category_bg_color,
        text_and_button_bg_color,
      } = donationCard || {};
      return (
          <div >
              
              <Link to={`/donation/${category_id}`}>
          <div
            className="card  bg-base-100 shadow-xl "
            style={{ backgroundColor: card_bg_color }}
          >
            <figure>
              <img src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2
                className="card-title w-20 text-sm "
                style={{
                  backgroundColor: category_bg_color,
                  color: text_and_button_bg_color,
                }}
              >
                {category}
              </h2>
              <div className="card-actions card-title ">
                <h2 style={{ color: text_and_button_bg_color }}> {title}</h2>
              </div>
            </div>
                  </div>
                  </Link>
        </div>
      );
};

export default SearchCards;