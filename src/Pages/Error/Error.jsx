import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="text-5xl w-full flex flex-col   justify-center items-center h-[100vh]">
              <h1 className="mb-5">404 page not found </h1>    
              <Link to="/"><h1 className="text-red-600">Home</h1></Link>
          </div>
          
    </div>
  );
};

export default Error;
