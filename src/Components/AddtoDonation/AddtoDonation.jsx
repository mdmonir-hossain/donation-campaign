import { Link } from "react-router-dom";

const AddtoDonation = ({ alldonations }) => {
  const {
    category,
    category_id,
    picture,
    card_bg_color,
    title,
    category_bg_color,
    text_and_button_bg_color,
    price,
  } = alldonations || {};
  return (
    <div>
      <div
        className="card card-side shadow-xl"
        style={{ backgroundColor: card_bg_color }}
      >
        
          <img className="w-1/2" src={picture} alt="Movie" />
      
        <div className="card-body">
          <h2
            style={{
              backgroundColor: category_bg_color,
              color: text_and_button_bg_color,
            }}
          >
            {category}
          </h2>
          <h2
            className="card-title"
            
          >
            {title}
          </h2>
          <h2
            className="card-title"
            style={{ color: text_and_button_bg_color }}
          >
            ${price}.00
          </h2>

          <div className="card-actions justify-end">
            <Link to={`/donation/${category_id}`}>
              <button
                style={{
                  backgroundColor: category_bg_color,
                  color: text_and_button_bg_color,
                }}
                className="btn "
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoDonation;
