import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [mydonate, setMydonate] = useState(0);
  const [nodata, setnodata] = useState('');

  const addDonations = JSON.parse(localStorage.getItem("donations"));

  const myDonate = addDonations?.length;
  
  useEffect(() => {
    if (myDonate === undefined) {
    
      setnodata('No data found');
    }
  },[])
  

  useEffect(() => {
    setMydonate(myDonate);
  }, [myDonate]);

  const totaldonate = 12 - mydonate;

  const data = [
    { label: "My Donation", value: mydonate, color: "#00C49F" },
    { label: "Total Donation", value: totaldonate, color: "#FF444A" },
  ];

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: false },
  };
  const total = 12;

  const getArcLabel = (params) => {
    const percent = params.value / total;
    return `${(percent * 100).toFixed(1)}%`;
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-6">
      {
        nodata && <p> {nodata }</p>
        }
        </div>
      <div className="flex justify-center items-center w-full">
        <PieChart
          series={[
            {
              outerRadius: 100,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 12,
            },
          }}
          {...sizing}
        />
      </div>
      <div className="flex justify-center items-center">
        <h1>My Donation: </h1>
        <div className="bg-[#00C49F] h-3 w-20 mr-2"></div>
        <h1>Total Donation: </h1>
        <div className="bg-[#FF444A] h-3 w-20"></div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Statistics;
