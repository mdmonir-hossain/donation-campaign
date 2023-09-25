import Card from "./Card";

const DonationCards = ({ donationCards }) => {
    console.log(donationCards)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
            {
                donationCards?.map(donationCard => <Card donationCard={donationCard} ></Card>)  
            }
        </div>
    );
};

export default DonationCards;