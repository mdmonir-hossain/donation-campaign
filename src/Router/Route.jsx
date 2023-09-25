import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Home from "../Pages/Home/Home";

const myCreatedDonationRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children: [
            {
                path : "/",
                element : <Home></Home>  
            },
            {
                path : "/donation",
                element : <Donation></Donation>  
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>  
            }
        ]
    }
])

export default myCreatedDonationRoute;