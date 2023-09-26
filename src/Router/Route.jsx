import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import DonationCardPage from "../Pages/DonationCardPage/DonationCardPage";
import Search from "../Pages/Search/Search";

const myCreatedDonationRoute = createBrowserRouter([
    {
        path : "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path : "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json') 
            },
            {
                path : "/donation",
                element : <Donation></Donation>  
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>  
            },
            {
                path : "/donation/:category_id",
                element: <DonationCardPage></DonationCardPage>,
                loader: () => fetch('/donation.json')
            },{
                path : "/search",
                element: <Search></Search>
            }
        ]
    }
])

export default myCreatedDonationRoute;