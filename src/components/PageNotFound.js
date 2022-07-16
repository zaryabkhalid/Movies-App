import React from "react";
import notfound from "../images/notfound.jpg";

const PageNotFound = () => {
  return (
    <>
      <div>
        <img className="w-50 h-50" src={notfound} alt="PageNotFound" />
      </div>
    </>
  );
};

export default PageNotFound;
