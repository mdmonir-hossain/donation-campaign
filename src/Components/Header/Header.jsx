import React from "react";

const Header = () => {
  return (
    <div>
      <header className=" -mt-20 -z-10 relative">
        <div className="hero h-[70vh] bg-banner  object-fit  bg-no-repeat">
          <div className="hero-overlay bg-white bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
