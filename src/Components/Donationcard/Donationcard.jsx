import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Donationcard = ({ card }) => {
  const {
    category,
    category_id,
    picture,
    card_bg_color,
    title,
    category_bg_color,
    text_and_button_bg_color,
    description,
    price,
  } = card || {};

  const handleAddtoDonation = () => {
    const addDonationArr = [];

    const addDonations = JSON.parse(localStorage.getItem("donations"));
    if (!addDonations) {
      addDonationArr.push(card);
        localStorage.setItem("donations", JSON.stringify(addDonationArr));
        toast("you donated successfully .");
    } else {
      addDonationArr.push(...addDonations, card);
        localStorage.setItem("donations", JSON.stringify(addDonationArr));
        toast("you donated successfully .");
    }
  };
  return (
      <div>
          <ToastContainer />
      <div className="card relative  bg-base-100 shadow-xl   ">
        
        <figure className="">
          <img className="w-3/4  mx-auto" src={picture} alt="picture" />
        </figure>
        <div className="hero-overlay  bg-opacity-60  absolute bottom-[626px] left-[45px]  lg:bottom-[221px] lg:left-[168px] md:bottom-[314px] md:left-[96px]  w-3/4 mx-auto h-20 ">
          <button
            onClick={handleAddtoDonation}
            className="btn ml-5 mt-5 "
            style={{
              backgroundColor: text_and_button_bg_color,
              color: "#fff",
            }}
          >
            Donate $ {price}
          </button>
        </div>
        <div className="card-body w-3/4 mx-auto">
          <div className="card-actions card-title  ">
            <h2> {title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Donationcard;
