import React from "react";

const Cards = ({ donationData }) => {
    const { category,picture, card_bg_color ,title,category_bg_color,text_and_button_bg_color} = donationData;
    const color = card_bg_color;
    console.log(color);
  return (
    <div >
      <div className="card  bg-base-100 shadow-xl " style={{backgroundColor: color}}>
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                  <h2 className="card-title w-40 " style={{ backgroundColor: category_bg_color, color: text_and_button_bg_color }}>{ category}</h2>
          <p >If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
