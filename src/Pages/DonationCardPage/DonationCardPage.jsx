import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationcard from "../../Components/Donationcard/Donationcard";

const DonationCardPage = () => {
  const [card, setCard] = useState();

  const { category_id } = useParams();

  const cards = useLoaderData();


  useEffect(() => {
    const finddonationcard = cards?.find(
      (cardData) => cardData.category_id === category_id
    );
    setCard(finddonationcard);
  }, [cards, category_id]);
    return <div>
      <Donationcard card={card} ></Donationcard>
  </div>;
};

export default DonationCardPage;
