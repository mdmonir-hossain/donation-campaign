import Card from "./Card";

const DonationCards = ({ donationCards }) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-40 ">
            {
                donationCards?.map(donationCard => <Card key={Card.category_id} donationCard={donationCard} ></Card>)  
            }
        </div>
    );
};

export default DonationCards;